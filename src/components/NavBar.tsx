import React, { useEffect } from "react";
import {
  DropButtons,
  Login,
  Logo,
  Nav,
  NavMenu,
  SignOut,
  UserImg,
  DropDown,
} from "./StyledComponents/StyledNav";
import logo from "../assets/images/logo.svg";
import home_icon from "../assets/images/home-icon.svg";
import movie_icon from "../assets/images/movie-icon.svg";
import search_icon from "../assets/images/search-icon.svg";
import original_icon from "../assets/images/original-icon.svg";
import watchlist_icon from "../assets/images/watchlist-icon.svg";
import tvshow_icon from "../assets/images/series-icon.svg";
import { auth, provider } from "../firebase";
import { UserCredential, signInWithPopup, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
} from "../Store/selectors/user.selector";
import {
  setUserLoginDetails,
  setSignOutState,
} from "../Store/slices/userSlice";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);
  const setUser = (user: any) => {
    dispatch(
      setUserLoginDetails({
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
      })
    );
  };
  const resetUser = () => {
    dispatch(
      setUserLoginDetails({
        name: "",
        email: "",
        photo: "",
      })
    );
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      } else if (!user) {
        resetUser();
        navigate("/");
      }
    });
  }, [username]);
  const handleAuth = () => {
    if (!username) {
      signInWithPopup(auth, provider)
        .then((result: UserCredential) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (username) {
      signOut(auth).then(() => {
        dispatch(setSignOutState);
      });
    }
  };

  return (
    <Nav>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      {!username ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <Link to="/home">
              <img src={home_icon} alt="home" />
              <span>HOME</span>
            </Link>
            <Link to="/search">
              <img src={search_icon} alt="search" />
              <span>SEARCH</span>
            </Link>
            <Link to="/watchlist">
              <img src={watchlist_icon} alt="watchlist" />
              <span>WATCHLIST</span>
            </Link>
            <Link to="originals">
              <img src={original_icon} alt="originals" />
              <span>ORIGINALS</span>
            </Link>
            <Link to="movies">
              <img src={movie_icon} alt="movies" />
              <span>MOVIES</span>
            </Link>
            <Link to="tvshows">
              <img src={tvshow_icon} alt="tv-show" />
              <span>TV-SHOWS</span>
            </Link>
          </NavMenu>
          <SignOut className="sign">
            <UserImg src={userphoto} alt={username} />
            <DropDown>
              <Link to="/home">
                <DropButtons src={home_icon} alt="home" />
              </Link>
              <Link to="/search">
                <DropButtons src={search_icon} alt="search" />
              </Link>
              <Link to="/watchlist">
                <DropButtons src={watchlist_icon} alt="watchlist" />
              </Link>
              <Link to="originals">
                <DropButtons src={original_icon} alt="originals" />
              </Link>
              <Link to="movies">
                <DropButtons src={movie_icon} alt="movies" />
              </Link>
              <Link to="tvshows">
                <DropButtons src={tvshow_icon} alt="tv-show" />
              </Link>
              <div className="signout">
                <span onClick={handleAuth}>Sign Out</span>
              </div>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
}

export default NavBar;
