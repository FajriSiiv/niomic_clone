import React from "react";
import "../style/footer.scss";
import {
  FaTiktok,
  FaYoutube,
  FaFacebookSquare,
  FaSpotify,
  FaTwitter,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="kami col-1 mg-flex">
        <h5>Kunjungi Kami</h5>
        <div className="sosmed flex-footer jc-evenly">
          <Sosmed />
        </div>
      </div>
      <div className="pages mg-flex">
        <h5>Pages</h5>
        <div className="flex-footer col-1 ">
          <a href="#home">Blog</a>
          <a href="#home">Career</a>
          <a href="#home">Testimoni</a>
          <a href="#home">FAQ</a>
          <a href="#home">Konfirmasi Pembayaran</a>
        </div>
      </div>
      <div className="col-2 hubungi mg-flex">
        <h5>Hubungi Kami</h5>
        <div className="flex-footer">
          <p>Whatapps : 01233123</p>
          <p>Email : anyanawda@email.com</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, recusandae?</p>
        </div>
      </div>
      <div className="col-2 official mg-flex">
        <h5>Official Office</h5>
        <div className="flex-footer">
          <p>Alamat Palsu Jakarta.Indonesia</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </footer>
  );
}

const Sosmed = () => {
  return (
    <>
      <a href="#home">
        <span>
          <FaInstagram className="instagram" />
        </span>{" "}
        Instagram
      </a>
      <a href="#home">
        <span>
          <FaTiktok className="tiktok" />
        </span>{" "}
        Tiktok
      </a>
      <a href="#home">
        <span>
          <FaYoutube className="youtube" />
        </span>{" "}
        Youtube
      </a>
      <a href="#home">
        <span>
          <FaFacebookSquare className="facebook" />
        </span>{" "}
        Facebook
      </a>
      <a href="#home">
        <span>
          <FaSpotify className="spotify" />
        </span>{" "}
        Spotify Podcast
      </a>
      <a href="#home">
        <span>
          <FaTwitter className="twitter" />
        </span>{" "}
        Twitter
      </a>
      <a href="#home">
        <span>
          <FaLinkedin className="linkedin" />
        </span>{" "}
        Linkedin
      </a>
    </>
  );
};
