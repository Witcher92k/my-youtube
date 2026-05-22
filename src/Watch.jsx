import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from './utils/navStateSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';

const WatchCompoent = () => {


    const [params] = useSearchParams();

    console.log(params.get('v'))


    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(closeMenu());
    }, [])



    return (

        <div className='flex-column'>
        <div>
            <iframe width="1200" height="600" src={`https://www.youtube.com/embed/${params.get('v')}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        </div>

        <CommentsContainer></CommentsContainer>
     
        </div>
    )
}

export default WatchCompoent