import './postStyle.css';

const PostsList = (props)=>{

    return(
        <div>
            <div className='logo listLogo'></div>
            <div className="allPosts">
                {props.listToShow.map((value) =>(
                    <div className='post' key={value.id}>
                        <div className='postHeader'>
                            <div className='postShelterIcon'></div>
                            <p className='postShelter'>{value.shelter}</p>
                        </div>

                        <p className='postDate'>{value.date}</p>

                        
                        <div>
                            <label className='postInfoTitle'>Name: </label>
                            <label className='postInfo'>{value.name}</label>
                        </div>
                        
                        <div>
                            <label className='postInfoTitle'>Species: </label>
                            <label className='postInfo'>{value.species}</label>
                        </div>
                        
                        <div>
                            <label className='postInfoTitle'>Breed: </label>
                            <label className='postInfo'>{value.breed}</label>
                        </div>
                        
                        <div>
                            <label className='postInfoTitle'>Age: </label>
                            <label className='postInfo'>{value.age}</label>
                        </div>
                        
                        <div>
                            <label className='postInfoTitle'>Gender: </label>
                            <label className='postInfo'>{value.gender}</label>
                        </div>
                        
                        <div>
                            <label className='postInfoTitle'>Description: </label>
                            <label className='postInfo'>{value.description}</label>
                        </div>
                        
                        <div>
                            <label className='postInfoTitle'>Spaying: </label> 
                            <label className='postInfo'>{value.spaying? "yes" : "no"}</label>
                        </div>
                        
                        <div>
                            <label className='postInfoTitle'>HouseTraining: </label> 
                            <label className='postInfo'>{value.houseTraining}</label> 
                        </div>
                        
                        <div>
                            <label className='postInfoTitle'>Vaccinations: </label>
                            <label className='postInfo'>{value.vaccinations}</label>
                        </div>
                        
                        <div>
                            <label className='postInfoTitle'>Behavior: </label>
                            <label className='postInfo'>{value.behavior}</label>
                        </div>
                        
                        <div>
                            <label className='postInfoTitle'>HealthState: </label>
                            <label className='postInfo'>{value.healthState}</label>
                        </div>
                        
                        {props.type === "adopter" && <button className='listBtn'>Request Adoption</button>}
                    </div>
                    
                ))}
            </div>
        </div>
    )
}
export default PostsList