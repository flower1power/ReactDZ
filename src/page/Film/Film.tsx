import style from './Film.module.css';
import Rang from '../../components/Rang/Rang';
import CardButton from '../../components/CardButton/CardButton';
import { imagePaths } from '../../utils/imagePath.constant';
import { Description } from '../../components/Description/Description';
import { Reviews } from '../../components/Reviews/Reviews';
import { useParams } from 'react-router';
import { decode } from 'he';
import { useEffect, useState } from 'react';
import { PREFIX } from '../../utils/api.constats';
import { IDetails, IDetailsShort } from '../../inteface/details.intefase';
import Title from '../../components/Title/Title';
import axios, { AxiosError } from 'axios';
import { parseDuration } from './parseDuration';

export function Film() {
  const { tt } = useParams();
  const [data, setData] = useState<IDetailsShort | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilmData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<IDetails>(`${PREFIX}/?tt=${tt}`);

        setData(response.data.short);
      } catch (err) {
        console.error('Ошибка:', err);

        if (err instanceof AxiosError) {
          setError(`Ошибка: ${err.message}`);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFilmData();
  }, [tt]);

  console.log(data);

  return (
    <>
      {loading && <Title title={'Загрузка...'} />}
      {!loading && error && <Title title={`Ошибка: ${error}`} />}
      {!loading && !data && !error && (
        <Title title="Нет данных для отображения" />
      )}
      {!loading && data && (
        <div className={style['wrapper']}>
          <div className={style['title-wrapper']}>
            <div className={style['title']}>Поиск фильмов</div>
            <div className={style['film-name']}>{data.name}</div>
          </div>
          <div className={style['body-wrapper']}>
            <img
              className={style['film-img']}
              src={data.image}
              alt="Постер фильма"
            />

            <div className={style['film-descriptions']}>
              <div className={style['description']}>{data.description}</div>
              <div className={style['rang-and-addFavorites']}>
                <Rang
                  className={style['rang']}
                  text={
                    data.aggregateRating && data.aggregateRating.ratingValue
                  }
                ></Rang>
                <CardButton text={'В избранное'}>
                  <img src={imagePaths.like}></img>
                </CardButton>
              </div>
              <Description
                title={'Тип'}
                description={data['@type']}
              ></Description>
              <Description
                title={'Дата выхода'}
                description={data.datePublished}
              ></Description>
              <Description
                title={'Длительность'}
                description={
                  parseDuration(data.duration) &&
                  `${parseDuration(data.duration)} мин`
                }
              ></Description>
              <Description
                title={'Жанр'}
                description={data.genre.join(', ')}
              ></Description>
            </div>
          </div>
          <Reviews
            name={data.review && decode(data.review.name)}
            dateCreated={data.review && data.review.dateCreated}
            reviewBody={data.review && decode(data.review.reviewBody)}
          ></Reviews>
        </div>
      )}
    </>
  );
}

export default Film;
