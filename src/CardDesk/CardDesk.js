import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import './CardDesk.css';
import Header from "../Header/Header";



const CardDesk = (props) => {






    const [post, setPost] = useState({});
    const {title} = useParams();



    useEffect(() => {
        fetch(`https://app-artment.herokuapp.com/api/advertising/${title}`)
                .then(res => res.json())
            .then(data => setPost(data))
    }, [title])
    console.log(post)

    const [images, setImages] = useState([post.img, post.img2, post.img3, post.img4]);

    return (
        <div className="card-box">
            <Header/>
        <div className="card-desk">

        <div className="card-body">

            <div className="slider">
                {images.map((e) => {
                    return(
                        <div>

                            <img src={e} alt=""/>

                        </div>
                    )

                })}
            </div>
            <h1>{post.title}</h1>
            <p>цена : {post.price}$</p>
            <p>город : {post.city}</p>
            <p>{post.paragraph}</p>
            <p>телефон : {post.phone}</p>

            <div className="buto"><Link to="/payment">Оформить</Link></div>


        </div>
        </div>
        </div>
    );
};

export default CardDesk;
