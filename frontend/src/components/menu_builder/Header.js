import React from 'react'

function Header() {
  return (
    <>
        {/* HEADER - BACKGROUND - PHOTO */}
        <div className='h-25 position-relative'>
            <div 
                className='herebackground position-absolute top-0 start-0 h-100 w-100'
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80)',
                backgroundSize: "cover",
                backgroundPosition: "center top"                
                }}
            >
            </div>
            <div className=' d-flex justify-content-center'>
                <div 
                    className='position-relative rounded-circle shadow' 
                    style={{
                        top: "20%",
                        height: "calc(10vw + 3rem)",
                        width: "calc(10vw + 3rem)",
                        backgroundImage: "url(https://c8.alamy.com/comp/2GRX8GC/chef-avatar-cook-man-working-restaurant-services-profile-user-person-people-icon-vector-illustration-2GRX8GC.jpg)",
                        backgroundSize: "cover",
                        backgroundPosition: "center top"  
                        }}>
                </div> 
            </div>
        </div>
      
    </>
  )
}

export default Header
