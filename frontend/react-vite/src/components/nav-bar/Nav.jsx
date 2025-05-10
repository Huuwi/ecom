import { useEffect, useState, useRef } from 'react'
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

    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top" style={{ height: '10%', boxShadow: '0 0.5px 0px rgba(0, 0, 0, 0.1)', background: 'white' }}>
                <div className="container-fluid">

                    {/* Phía bên trái: Logo và các link */}
                    <div className="d-flex gap-3">
                        <a href='#' className="navbar-brand" style={{ color: '#5433EB' }}>SHOP</a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="navbar-nav gap-4">
                                <a href="#home" className="nav-link">Home</a>
                                <a href="#explore" className="nav-link">Explore</a>
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
                            <button className="btn btn-outline-light me-3"><FaRegHeart /></button>
                            <button className="btn btn-outline-light me-3"><FiShoppingCart /></button>
                        </div>
                        <button className="btn btn-outline-light" style={{ border: '1px solid #DBDBDB' }} onClick={openModal}> Sign In</button>
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
                            <input type="text" className="form-control mb-2" placeholder="Tài khoản" />
                            <input type="password" className="form-control mb-2" placeholder="Mật khẩu" />
                        </div>
                        <div className="modal-footer">
                            <div className='mt-2 me-auto'>
                                <p>Chưa có tài khoản? <a
                                    onClick={handleRegisterClick}
                                    style={{ cursor: 'pointer', color: 'blue' }}
                                >Đăng ký</a></p>
                            </div>
                            <button type="button" className="btn btn-primary">
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
