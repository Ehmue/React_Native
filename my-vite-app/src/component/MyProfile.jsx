const user = {
    name: 'ehmue',
    imageUrl: '/Users/ehmue/Documents/GitHub/React_Native/my-vite-app/src/image/harlay.jpg',
    imageSize: 90,
}


function MyProfile(){
    return(
        <>
            <h1>{user.name}</h1>
            <img className='Avator' src={user.imageUrl} alt={"photo of " + user.name} style={{width: user.imageSize, height: user.imageSize}} />

        </>
    )
}
export default MyProfile