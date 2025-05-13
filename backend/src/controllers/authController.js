const UserModel = require('../model/userModel');
const { generateAccessToken, generateRefreshToken, verifyAccessToken, verifyRefreshToken } = require('../util/jwtUtil');

exports.register = async (req, res) => {
    try {
        const user = req.body;
        const users = await UserModel.addUser(user);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.login = async (req, res) => {
    try {
        const user = req.body;

        const { Username, PasswordHash } = req.body;

        if (!Username.trim() || !PasswordHash.trim()) {
            return res.status(400).json({ message: 'Thiếu tên đăng nhập hoặc mật khẩu' });
        }

        const login = await UserModel.login(user);

        if (!login) {
            return res.status(401).json({ message: 'Không tìm thấy người dùng!' });
        }

        const payload = { Username: login[0].Username, PasswordHash: login[0].PasswordHash, FullName: login[0].FullName, Email: login[0].Email, Phone: login[0].Phone, Address: login[0].Address, Role: login[0].Role };

        // console.log(payload);

        const accessToken = generateAccessToken(payload);

        const refreshToken = generateRefreshToken(payload);

        // Gửi token qua cookie
        // res.cookie('refreshToken', refreshToken, {
        //     httpOnly: true, // Cookie không thể truy cập từ JavaScript phía client
        //     maxAge: 7 * 24 * 60 * 60 * 1000, // 7 ngày
        //     sameSite: 'lax', // hoặc 'none' nếu dùng HTTPS
        //     secure: false // nếu đang test ở localhost. Đặt true nếu là HTTPS
        // });

        res.cookie('accessToken', accessToken, {
            httpOnly: true, // Cookie không thể truy cập từ JavaScript phía client
            maxAge: 20 * 60 * 1000, // 20 phút
            sameSite: 'lax', // hoặc 'none' nếu dùng HTTPS
            secure: false // nếu đang test ở localhost. Đặt true nếu là HTTPS
        });

        res.json({ Username: login[0].Username, accessToken });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Kiểm tra token (kiểm tra xem người dùng đã đăng nhập hay chưa)
exports.checkLogin = async (req, res) => {
    const token = req.cookies.accessToken;  // Lấy token từ cookie

    if (!token) {
        return res.status(401).json({ message: 'Chưa đăng nhập' });
    }

    try {
        const decoded = await verifyAccessToken(token);
        res.json({ isAuthenticated: true, user: decoded });
    } catch (error) {
        res.status(401).json({ message: 'Token không hợp lệ' });
    }
};

// Tạo access token mới
exports.refreshToken = (req, res) => {
    const token = req.cookies.refreshToken;
    if (!token) return res.status(401).json({ message: 'Không có refresh token' });

    try {
        const user = verifyRefreshToken(token);
        const newAccessToken = generateAccessToken({ id: user.id, username: user.username, role: user.role });
        res.json({ accessToken: newAccessToken });
    } catch (err) {
        return res.status(403).json({ message: 'Refresh token không hợp lệ' });
    }
}

exports.logout = async (req, res) => {
    // res.clearCookie('refreshToken', {
    //     httpOnly: true,
    //     sameSite: 'Strict', // Thiết lập bảo mật
    // });

    res.clearCookie('accessToken', {
        httpOnly: true,
        sameSite: 'Strict', // Thiết lập bảo mật
    });

    res.json({ message: 'Đăng xuất thành công' });
}