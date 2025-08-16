export const backgroundStyles = `
  .news-clip-1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 200px;
    height: 120px;
    background: white;
    border: 1px solid #ddd;
    transform: rotate(-8deg);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    z-index: 1;
    opacity: 0.7;
  }

  .news-clip-1::before {
    content: 'BREAKING NEWS\\A Tech Innovation Surge\\A AI Revolution Continues';
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 10px;
    line-height: 1.2;
    color: #333;
    white-space: pre;
    font-family: 'Times New Roman', serif;
  }

  .news-clip-2 {
    position: absolute;
    bottom: 15%;
    right: 8%;
    width: 180px;
    height: 100px;
    background: #fff9c4;
    border: 1px solid #e6d700;
    transform: rotate(12deg);
    box-shadow: 0 3px 6px rgba(0,0,0,0.1);
    z-index: 1;
    opacity: 0.8;
  }

  .news-clip-2::before {
    content: 'TECH WEEKLY\\A Future of AI\\A Innovation Hub';
    position: absolute;
    top: 8px;
    left: 8px;
    font-size: 9px;
    line-height: 1.3;
    color: #444;
    white-space: pre;
    font-family: 'Arial', sans-serif;
  }

  .graffiti-1 {
    position: absolute;
    top: 25%;
    right: 15%;
    font-size: 3rem;
    font-weight: 900;
    color: rgba(255, 100, 150, 0.15);
    transform: rotate(-25deg);
    font-family: 'Impact', sans-serif;
    text-shadow: 2px 2px 0 rgba(255, 100, 150, 0.1);
    z-index: 1;
  }

  .graffiti-1::before {
    content: 'NEWS';
  }

  .anime-element {
    position: absolute;
    bottom: 25%;
    left: 12%;
    font-size: 2.5rem;
    color: rgba(100, 200, 255, 0.12);
    transform: rotate(15deg);
    z-index: 1;
  }

  .anime-element::before {
    content: '⚡ ★ ◆';
    letter-spacing: 10px;
  }

  .anime-bg-1 {
    position: absolute;
    top: 5%;
    right: 10%;
    width: 200px;
    height: 200px;
    background-image: url('https://en.onepiece-cardgame.com/beginners/renewal/images/about/about-kv_01.png');
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    border-radius: 15px;
    transform: rotate(-12deg);
    z-index: 1;
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
    border: 3px solid rgba(255, 255, 255, 0.4);
  }

  .anime-bg-2 {
    position: absolute;
    bottom: 15%;
    left: 5%;
    width: 180px;
    height: 180px;
    background-image: url('https://i.pinimg.com/736x/1a/1f/e4/1a1fe4c7d56f940261b85a2329ad5ac9.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.5;
    border-radius: 20px;
    transform: rotate(18deg);
    z-index: 1;
    box-shadow: 0 8px 25px rgba(78, 205, 196, 0.4);
    border: 3px solid rgba(255, 255, 255, 0.4);
  }

  .anime-bg-3 {
    position: absolute;
    top: 35%;
    right: 2%;
    width: 160px;
    height: 160px;
    background-image: url('https://afeias.com/wp-content/uploads/2015/03/IMG_000215.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.45;
    border-radius: 15px;
    transform: rotate(-25deg);
    z-index: 1;
    box-shadow: 0 8px 25px rgba(69, 183, 209, 0.4);
    border: 3px solid rgba(255, 255, 255, 0.4);
  }

  .anime-bg-4 {
    position: absolute;
    top: 8%;
    left: 8%;
    width: 150px;
    height: 150px;
    background-image: url('https://en.onepiece-cardgame.com/beginners/renewal/images/about/about-kv_01.png');
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    border-radius: 12px;
    transform: rotate(22deg);
    z-index: 1;
    box-shadow: 0 8px 25px rgba(150, 206, 180, 0.4);
    border: 3px solid rgba(255, 255, 255, 0.4);
  }

  .anime-bg-5 {
    position: absolute;
    bottom: 8%;
    right: 25%;
    width: 140px;
    height: 140px;
    background-image: url('https://i.pinimg.com/736x/1a/1f/e4/1a1fe4c7d56f940261b85a2329ad5ac9.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.45;
    border-radius: 15px;
    transform: rotate(-15deg);
    z-index: 1;
    box-shadow: 0 8px 25px rgba(254, 202, 87, 0.4);
    border: 3px solid rgba(255, 255, 255, 0.4);
  }

  .anime-bg-6 {
    position: absolute;
    top: 60%;
    left: 12%;
    width: 120px;
    height: 120px;
    background-image: url('https://media.sciencephoto.com/c0/47/35/60/c0473560-800px-wm.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    border-radius: 50%;
    transform: rotate(30deg);
    z-index: 1;
    box-shadow: 0 8px 25px rgba(255, 159, 243, 0.4);
    border: 3px solid rgba(255, 255, 255, 0.4);
  }

  .manga-panel {
    position: absolute;
    top: 25%;
    left: 12%;
    width: 90px;
    height: 60px;
    background: white;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    transform: rotate(12deg);
    opacity: 0.8;
    z-index: 1;
  }

  .manga-panel::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: linear-gradient(45deg, transparent 30%, rgba(0,0,0,0.05) 31%, rgba(0,0,0,0.05) 69%, transparent 70%);
    border-radius: 2px;
  }
`;