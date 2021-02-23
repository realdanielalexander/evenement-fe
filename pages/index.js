import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
// import the icons you need

import React from "react";
import Link from "next/link";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
// import styles from '../styles/Home.module.css'

const NavItem = props => (
  <a
    href={props.href}
    className="
    text-sm font-bold 
    text-gray-700 px-2 py-1 
    hover:bg-blue-300 rounded-sm
    transition-colors
    duration-300
    ">
    {props.text}
  </a>
)

const ButtonBlue = props => (
  <a
    href={props.href}
    className="
    text-sm font-bold px-5 py-3
    border
    border-blue-500
    bg-blue-500
    text-white
    hover:bg-blue-700
    rounded-sm
    transition-colors
    duration-300
    ">
    {props.text}
  </a>
)

const ButtonWhite = props => (
  <a
    href={props.href}
    className="
    text-sm font-bold px-5 py-3
    border
    border-blue-500
    bg-white
    text-blue-500
    hover:bg-blue-700
    hover:text-white
    rounded-sm
    transition-colors
    duration-300
    ">
    {props.text}
  </a>
)

const FeatureCard = props => (
  <div className="flex-col mx-auto text-center py-8 space-y-4 md:w-1/3">
    <img className="mx-auto w-10" src={props.image} />
    <p className="font-bold text-1xl">{props.title}</p>
    <p>{props.description}
    </p>
  </div>
)

const Content = props => (
  <div className="text-center md:text-left md:flex mx-auto py-20 md:space-x-8">
    <img className="h-96 w-full object-cover md:w-1/2 md:h-max" src="nils-stahl-BCkLxilDvJU-unsplash.jpg" />
    <div className="flex-col space-y-8 mt-8 md:m-auto">
      <div className="flex-col space-y-4 mt-8 md:m-auto">
        <p className="text-xs font-bold text-blue-600">{props.category}</p>
        <p className="text-2xl font-semibold">{props.title}
        </p>
      </div>

      <p className="text-1xl text-gray-500">{props.description}
      </p>
      <p className="mt-8">

        <ButtonWhite href={props.href} text={props.callToAction} />
      </p>
    </div>
  </div>
)

const ContentReverse = props => (
  <div className="text-center md:text-left md:flex md:flex-row-reverse mx-auto py-20 md:space-between">
    <img className="h-96 w-full object-cover md:w-1/2 md:h-max" src="nils-stahl-BCkLxilDvJU-unsplash.jpg" />
    <div className="flex-col space-y-8 mt-8 md:m-auto">
      <div className="flex-col space-y-4 mt-8 md:m-auto">
        <p className="text-xs font-bold text-blue-600">{props.category}</p>
        <p className="text-2xl font-semibold">{props.title}
        </p>
      </div>

      <p className="text-1xl text-gray-500">{props.description}
      </p>
      <p className="mt-8">
        <ButtonWhite href={props.href} text={props.callToAction} />
      </p>
    </div>
  </div>
)

const CardBlog = props => (
  <div className=" rounded-sm justify-center flex flex-col md:py-8 md:pl-8 bg-gray-100 space-y-8">
    <div className="flex-col space-y-4 mt-8">
      <p className="text-xs font-bold text-grey-800">By Evenement</p>
      <p className="text-2xl font-semibold text-gray-800">10 Vendor Terbaik di Bandung
            </p>
    </div>

    <p className="text-1xl text-gray-600">Ini adalah daftar 10 vendor terbaik di Bandung. Nomor 7 sungguh mengejutkan!
      </p>
    <div className="flex">
      <ButtonWhite className="mx-auto" href="/baca" text="Baca lebih lanjut" />
    </div>
  </div>
)

const FooterItem = props => (
  <a
    href={props.href}
    className="
       text-xs font-bold 
      text-gray-700 px-2 py-1 
      hover:bg-blue-300 rounded-sm
      transition-colors
      duration-300
      ">
    {props.text}
  </a>
)

export default function Home() {
  return (
    <div className="container mx-auto font-body">
      <nav className="flex justify-between px-2 py-8">
        <span>
          EVENEMENT
        </span>
        <ul className="flex space-x-2 hidden md:block">
          <NavItem href="/tentang-kami" text="Tentang Kami" />
          <NavItem href="/layanan" text="Layanan" />
          <NavItem href="/kontak" text="Kontak" />
          <NavItem href="/blog" text="Blog" />
          <NavItem href="/faq" text="FAQ" />
        </ul>
        <ul className="flex space-x-2 hidden md:block">
          <ButtonWhite href="/gabung" text="Jadilah Mitra Kami" />
          <ButtonBlue href="/gabung" text="Gabung" />
        </ul>
      </nav>

      <div className="flex-col space-y-8 text-center py-40">
        <h1 className="font-bold text-4xl">Mari buat beragam acara bersama kami</h1>
        <p className="text-gray-500">Kami membantu anda untuk merekomendasikan vendor
        dan juga event organizer yang kredibel dan sesuai
        dengan kebutuhan Anda.
        </p>
        <div className="flex space-x-4 justify-center">
          <ButtonBlue href="/gabung" text="Gabung Sekarang" />
          <ButtonWhite href="/layanan" text="Pelajari Lebih Lanjut" />
        </div>
      </div>

      <div className="flex-col text-center space-y-2 py-8 bg">
        <h1 className="text-2xl font-semibold">Sukseskan semua acara yang Anda impikan</h1>
        <p className="text-gray-500">Kami membantu banyak orang untuk mensukseskan acara,
        beberapa layanan yang kami berikan untuk Anda:
        </p>
        <div className="flex flex-col md:flex-row">
          <FeatureCard image="feature.svg" title="Temukan" description="Kami mempertemukan Anda dengan vendor dan
            event organizer yang cocok dengan Anda."/>
          <FeatureCard image="feature.svg" title="Sediakan" description="Kami menyediakan daftar vendor dan event
            organizer dalam bentuk digital."/>
          <FeatureCard image="feature.svg" title="Rekomendasikan" description="Kami merekomendasikan vendor dan event organizer
            yang kredibel."/>
        </div>
      </div>

      <Content category="TENTANG KAMI" title="Evenement adalah platform digital yang menghubungkan
            klien dengan vendor serta event organizer." description="Jangan khawatir. Evenement akan membantu Anda dalam
            mensukseskan acara Anda. Sudah tertarik? Gabung bersama
            kami sekarang." href="/kontak" callToAction="Kontak kami" />
      <ContentReverse category="PENAWARAN" title="Anda akan terhubung dengan banyak vendor dan event organizer yang tentunya
        cocok dengan Anda." description="Tidak perlu menunggu lama, mari bergabung bersana kami. Oh, atau apakah Anda masih ragu? 
        Kontak kami untuk mendapatkan informasi lebih lanjut." href="/kontak" callToAction="Kontak kami" />
      <Content category="" title="Tidak perlu khawatir dalam mempersiapkan acara Anda." description="Kami Evenement akan selalu setia 
        dalam pelaksanaan acara Anda, kami mempunyai sebuah basis data dari para vendor dan event organizer yang dapat Anda pilih 
        sesuai dengan kriteria Anda." href="/kontak" callToAction="Gabung Sekarang" />

      <div className="bg-red-400 text-center w-full md:text-left md:flex mx-auto justify-items-stretch">
        <div className="relative pr-full pb-full md:pr-1/3 md:pb-1/3 md:w-1/3">
          <div className="z-10 absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
          <img className="absolute h-full w-full object-cover" src="nils-stahl-BCkLxilDvJU-unsplash.jpg" />
        </div>

        <div className="justify-center flex flex-col md:pt-8 md:pl-8 md:w-2/3 bg-blue-500 space-y-8">
          <div className="flex-col space-y-4 mt-8">
            <p className="text-xs font-bold text-white">By Evenement</p>
            <p className="text-2xl font-semibold text-white">10 Vendor Terbaik di Bandung
            </p>
          </div>

          <p className="text-1xl text-gray-100">Ini adalah daftar 10 vendor terbaik di Bandung. Nomor 7 sungguh mengejutkan!
      </p>
          <div className="flex flex-col">
            <ButtonBlue href="/baca" text="Baca lebih lanjut" />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 my-8">
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />

      </div>

      <div className="flex-col">
        <div className="flex justify-between mx-auto px-2 py-8">
          <ul className=" justify-between hidden md:block m-auto">
            <FooterItem href="/beranda" text="Beranda" />
            <FooterItem href="/tentang-kami" text="Tentang" />
            <FooterItem href="/layanan" text="Layanan" />
          </ul>
          <span>
            EVENEMENT
            </span>
          <ul className=" justify-between hidden md:block m-auto">
            <FooterItem href="/kontak" text="Kontak" />
            <FooterItem href="/blog" text="Blog" />
            <FooterItem href="/faq" text="FAQ" />
          </ul>
        </div>
        <div className="flex flex-col border-t-2">
          <div className="flex justify-between mx-auto px-2 pt-8 pb-4">
            <ul className=" justify-between hidden md:flex m-auto">
              <li>
                <Link href="/#">
                  <a className="text-black gr-hover-text-blue-3 ml-7">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a className="text-black gr-hover-text-blue-3 ml-7">
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a className="text-black gr-hover-text-blue-3 ml-7">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="copyright text-center text-xs my-8">
                  <p className="">
                    © EVENEMENT | 2021, All Rights Reserved
                  </p>
                </div>
        </div>
      </div>

    </div>

  )
}
