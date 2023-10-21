"use client"
import { useEffect } from 'react';
import Formation from './components/Formation'
import Habilities from './components/Habilities'
import Header from './components/Headex'
import Initial from './components/Initial'
import Scripts from "./Scripts";
import HeroCarousel from './components/HeroCarousel';
import Teste from './components/Teste';


export default function Home() {
  useEffect(() => {
    Scripts();
  }, []);
  return (
    <>
    <Header/>
    <Initial/>
    <Formation/>
    <Habilities/>
    <Teste/>
    <HeroCarousel/>
    </>
  )
}
