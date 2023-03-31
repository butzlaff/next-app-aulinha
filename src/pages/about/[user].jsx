import React from 'react'
import About from '.'



export const getStaticPaths = async () => {

  const secret = process.env.SECRET;

  return {
  paths : [
      {
      params: {
        user: 'xablau'
      }
      } ,
      {
        params: {
          user: secret,
      }
      }, 
      {
      params: {
        user: 'abacate'
      }
      }
  ],
  fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const user = context.params.user;

  return {
    props : {
      user : user,
    }
  }
}

const User = ({ user }) => {
  return (
    <>
    <div>{user}</div>
    <About />
    </>
  )
}

export default User;
