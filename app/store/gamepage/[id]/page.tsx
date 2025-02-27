import { notFound } from "next/navigation";
import games from "@/data/games.json";


import GameMain from '../../components/storepage/gamemain';
import Expansion from '../../components/storepage/expansions';
import About from '../../components/storepage/about';
import Requirements from '../../components/storepage/requirements'
import Similar from '../../components/storepage/similar';
import Reviews from '../../components/storepage/reviews';
import GameFeatures from '../../components/storepage/gameFeatures';
import Languages from '../../components/storepage/languages';
import Links from '../../components/storepage/links';
import Achievements from '../../components/storepage/achievements';
import Pointshop from '../../components/storepage/pointshop';

import Client from '../../../components/client'
import Header from '../../../components/header'

type Game = {
    id: number;
    title: string;
    genres: string;
    description: string;
    release_date: string;
    developer: string;
    publisher: string[];
    tags?: string[];
    packages?: {
      Game?: {
        Name: string;
        Price: string;
        Saleprice: string;
        Discount: string;
        Platform: string | string[];
      };
      DLC?: {
        DLC1?: {
            Name: string;
            Price: string;
            Saleprice: string;
            Discount: string;
            Platform: string | string[];
            Image?: string;
          };
          DLC2?: {
            Name: string;
            Price: string;
            Saleprice: string;
            Discount: string;
            Platform: string | string[];
            Image?: string;
          };
      }
    };
    features?: string[];
    Languages: {
        English: string[];
        Simplified_Chinese?: string[];
        French?: string[];
        Italian?: string[];
        German?: string[];
      };
    About?: string;
    achievements?: string;
    links?: string[];
    system_requirements?: {
        minimum?: {
          os?: string;
          processor?: string;
          memory?: string;
          graphics?: string;
          directX?: string;
          storage?: string;
          SoundCard?: string;
        };
        recommended?: {
          os?: string;
          processor?: string;
          memory?: string;
          graphics?: string;
          directX?: string;
          storage?: string;
          SoundCard?: string;
        };
      };
    platforms?: {
      id: number;
      name: string;
    }[];
    overall_rating?: string;
    images?: {
      icon?: string;
      banner?: string;
      main?: string;
      about?: string;
      achievements?: string;
    };
    size?: string;
    screenshots?: {
      id: number;
      image: string;
    }[];
    videos?: {
      id: number;
      url: string;
    }[];
    reviews?: {
      id: number;
      title: string;
      rating: number;
      content: string;
    }[];
    streaming?: string;
  };
  




export default function Storepage({ params }: { params: { id: string } }) {

    const game: Game | undefined = games.find((g) => g.id === Number(params.id as string));


    if (!game) {
        notFound();
      }

    return (
        <>
            <Client />
            <Header />
            <div className="px-48 bg-gradient-to-b from-slate-950 to-slate-900 py-8">
                <GameMain game={game}></GameMain>
                <div className="flex gap-3">
                    <div className="w-2/3">
                        <Expansion game={game}></Expansion>
                        <About game={game}></About>
                        <Requirements game={game}></Requirements>
                        <Similar></Similar>
                    </div>
                    <div className="w-1/3">
                        <GameFeatures></GameFeatures>
                        <Languages></Languages>
                        <Achievements></Achievements>
                        <Pointshop></Pointshop>
                        <Links></Links>
                    </div>
                </div>
                <Reviews></Reviews>
            </div>
        </>
    )
}