import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import '../../css/nav-bar/nav.css'
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'
import Modal from 'bootstrap/js/dist/modal';


const Nav = () => {
    const searchText = 'Coffee Grinders';

    const [showInput, setShowInput] = useState(false);

    const modalRef = useRef();

    // user login infor
    const [Username, setUserName] = useState('');
    const [PasswordHash, setPasswordHash] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [loginedName, setLoginedName] = useState('?');

    // const [data, setData] = useState(null);
    // const [error, setError] = useState(null);
    const [user, setUser] = useState(null);

    const openModal = () => {
        const modal = new Modal(modalRef.current);
        modal.show();
    };

    const handleRegisterClick = () => {
        // Mở trang đăng ký trong tab mới
        window.open('/register', '_blank');
    };

    // Hàm theo dõi sự kiện cuộn trang
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setShowInput(true);  // Hiển thị ô input
        } else {
            setShowInput(false);  // Ẩn ô input
        }
    };

    // Thêm sự kiện khi load và khi cuộn
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup khi component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Xu ly dang nhap
    const handleLogin = async (e) => {
        e.preventDefault();
        const backendUrl = import.meta.env.VITE_BACKEND_URL;

        if (!Username.trim() || !PasswordHash.trim()) {
            window.alert('Không được để trống tài khoản hoặc mật khẩu');
            setUserName('');
            setPasswordHash('');
            return;
        }

        try {
            let responseLogin = await axios.post(`${backendUrl}/auth/login`, { Username, PasswordHash }, { withCredentials: true });
            // console.log(responseLogin.data);
            window.alert('Đăng nhập thành công!');
            // window.location.reload();

            // // Lưu token vào localStorage
            // localStorage.setItem('accessToken', responseLogin.data.accessToken);
            // localStorage.setItem('refreshToken', responseLogin.data.refreshToken);
            // localStorage.setItem('Username', responseLogin.data.Username);

            if (responseLogin.data) {
                setIsLogin(true);
                setLoginedName(responseLogin.data.Username);
            }

        }
        catch (error) {
            console.log(error);
            window.alert('Lỗi khi đăng nhập tài khoản!');
        } finally {
            // Clear input
            setUserName('');
            setPasswordHash('');
        }
    }

    // Xu li dang xuat
    const handleLogout = async (e) => {
        e.preventDefault();
        const backendUrl = import.meta.env.VITE_BACKEND_URL;

        try {
            let responseLogout = await axios.post(`${backendUrl}/auth/logout`, {}, { withCredentials: true });
            // console.log(responseLogout.data);
            window.alert('Đăng xuất thành công!');

            // // Xóa token khỏi localStorage
            // localStorage.removeItem('accessToken');
            // localStorage.removeItem('refreshToken');
            // localStorage.removeItem('Username');

            setIsLogin(false);
            // window.location.reload();

        }
        catch (error) {
            console.log(error);
            window.alert('Lỗi khi đăng xuất tài khoản!');
        }
    }

    // // Kiểm tra trạng thái đăng nhập khi trang được tải lại
    // useEffect(() => {
    //     const token = localStorage.getItem('accessToken');
    //     if (token) {
    //         setLoginedName(localStorage.getItem('Username'));
    //         setIsLogin(true); // Đánh dấu người dùng đã đăng nhập
    //     } else {
    //         setIsLogin(false); // Nếu không có token thì người dùng chưa đăng nhập
    //     }
    // }, []);

    // useEffect(() => {
    //     // Gọi hàm getProtectedData khi component mount
    //     const getProtectedData = async () => {
    //         const token = localStorage.getItem('accessToken');
    //         try {
    //             const response = await axios.get('http://localhost:3000/api/profile', {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`
    //                 },
    //                 withCredentials: true
    //             });
    //             setData(response.data); // Lưu dữ liệu vào state 
    //         } catch (err) {
    //             setError(err.message); // Lưu lỗi vào state
    //         }
    //     };

    //     getProtectedData();
    // }, []);

    useEffect(() => {
        const checkLogin = async () => {
            const backendUrl = import.meta.env.VITE_BACKEND_URL;
            try {
                const res = await axios.get(`${backendUrl}/auth/check-login`, { withCredentials: true });

                // console.log(res.data);

                if (res.data.isAuthenticated) {
                    setLoginedName(res.data.user.Username);
                    setIsLogin(true);
                    setUser(res.data.user);
                } else {
                    setIsLogin(false);
                }
            } catch (err) {
                setIsLogin(false);
                console.log("Chưa đăng nhập hoặc token hết hạn");
            }
        };

        checkLogin();
    }, []);

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ height: '10%', boxShadow: '0 0.5px 0px rgba(0, 0, 0, 0.1)', background: 'white' }}>
                <div className="container-fluid">

                    {/* Phía bên trái: Logo và các link */}
                    <div className="d-flex gap-3">
                        <a href='#' className="navbar-brand" style={{ color: '#5433EB' }}>SHOP</a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="navbar-nav gap-4">
                                <a href="/" className="nav-link">Home</a>
                                <a href="/" className="nav-link">Explore</a>
                            </div>
                        </div>
                    </div>

                    {/* Phía giữa: Search box */}
                    {showInput &&
                        <form className="d-flex mx-auto" role="search" style={{ width: "40%" }}>
                            <div className="collapse navbar-collapse" id="navbarNav">

                                <div className="input-group">
                                    <span className="input-group-text">
                                        <IoSearch />
                                    </span>
                                    <input
                                        className="form-control me-2"
                                        type="search"
                                        placeholder={searchText}
                                    ></input>
                                </div>
                            </div>
                        </form>
                    }

                    {/* Phía bên phải: Icon và Sign In */}
                    <div className="d-flex align-items-center">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <button className="btn btn-outline-light me-3" onClick={() => { window.open('/favProducts', '_blank') }}><FaRegHeart /></button>
                            <button className="btn btn-outline-light me-3" onClick={() => { window.open('/cart', '_blank') }}><FiShoppingCart /></button>
                        </div>
                        {isLogin ?
                            <div className='dropdown'>
                                <button className="btn btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false" style={{ border: '1px solid #DBDBDB' }}> {loginedName}</button>
                                <ul className="dropdown-menu dropdown-menu-end mt-2 cursor-pointer">
                                    <li><button className="dropdown-item " onClick={() => { window.open('/userInfor', '_blank') }}>Cài đặt</button></li>
                                    <li><button className="dropdown-item " onClick={handleLogout}>Đăng xuất</button></li>
                                </ul>
                            </div>
                            :
                            <button className="btn btn-outline-light" style={{ border: '1px solid #DBDBDB' }} onClick={openModal}> Sign In</button>
                        }
                    </div>
                </div>

            </nav >

            {/* Cửa sổ đăng ký */}
            <div
                className="modal fade"
                tabIndex="-1"
                ref={modalRef}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Đăng nhập</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <input type="text" className="form-control mb-2" placeholder="Tài khoản" value={Username} onChange={(e) => { setUserName(e.target.value) }} />
                            <input type="password" className="form-control mb-2" placeholder="Mật khẩu" value={PasswordHash} onChange={(e) => { setPasswordHash(e.target.value) }} />
                        </div>
                        <div className="modal-footer">
                            <div className='mt-2 me-auto'>
                                <p>Chưa có tài khoản? <a
                                    onClick={handleRegisterClick}
                                    style={{ cursor: 'pointer', color: 'blue' }}
                                >Đăng ký</a></p>
                            </div>
                            <button type="button" className="btn btn-primary" onClick={(e) => handleLogin(e)}>
                                Đăng nhập
                            </button>
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav
