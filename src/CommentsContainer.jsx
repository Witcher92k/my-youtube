import React from 'react'
import Comment from './Comment'



const CommentList = ({commentList})=>{


  return (

    <div>

    {

      commentList.map(item=>(
      
      <div>

      <Comment key={item.id} data={item}/>
  
      <div className='pl-5 border border-l-black ml-5'>
        
        <CommentList commentList={item.replies}></CommentList>

      </div>

      </div>
    
      )
    
    )
    }

</div>

  )


}

const CommentsContainer = () => {


    const comments = [{
        name:"user1",
        text:"efhehfh ahwdddddd",
        replies:[

          {
            name:"hye",
            text:"ffff",
            replies:[]
          },
           {
            name:"hye",
            text:"ffff",
            replies:[]
          },
           {
            name:"hye",
            text:"ffff",
            replies:[
              {
            name:"hye",
            text:"ffff",
            replies:[]
          },
           {
            name:"hye",
            text:"ffff",
            replies:[
              {
            name:"hye",
            text:"ffff",
            replies:[]
          },
           {
            name:"hye",
            text:"ffff",
            replies:[]
          },
           {
            name:"hye",
            text:"ffff",
            replies:[]
          }
            ]
          },
           {
            name:"hye",
            text:"ffff",
            replies:[]
          }
            ]
          }


        ] },


        {
        name:"user1",
        text:"efhehfh ahwdddddd",
        replies:[]
    },

    {
        name:"user1",
        text:"efhehfh ahwdddddd",
        replies:[]
    }
      
      
      
      
      
      
      ]
 

  return (
    <div>
        <div className='mb-3 text-black'>Comments</div>
       <CommentList commentList={comments}/>
    </div>
  )
}

export default CommentsContainer