import css from './App.module.css';
import { useEffect, useState } from 'react';
import sunset from '../../assets/photo_2025-04-01_23-43-52.jpg';
import fish from '../../assets/photo_2025-04-01_23-59-14.jpg';
import eggs from '../../assets/photo_2025-04-01_23-59-07.jpg';
import photo1 from '../../assets/photo_2024-06-23_15-43-05.jpg';
import photo2 from '../../assets/photo_2024-06-23_15-16-55.jpg';
import photo3 from '../../assets/photo_2024-06-23_15-16-50.jpg';

function App() {
  const targetDate = new Date('2025-06-16T08:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const difference = targetDate - Date.now();
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = ms => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
    const days = Math.floor(ms / (1000 * 60 * 60 * 24));
    return `${days}д ${hours}г ${minutes}хв ${seconds}с`;
  };

  return (
    <div className={css.wrapper}>
      <div className={css.timerText}>
        До походу з пацанами залишилось:{' '}
        <span className={css.accent}>{formatTime(timeLeft)}</span>
      </div>
      <div className={css.imgWrapper}>
        <img className={css.photo} src={fish} alt="" />
        <img className={css.sunset} src={photo1} alt="" />
        <img className={css.photo} src={eggs} alt="" />
        <img className={css.sunset} src={sunset} alt="" />
        <img className={css.photo} src={photo3} alt="" />
        <img className={css.sunset} src={photo2} alt="" />
      </div>
    </div>
  );
}

export default App;
