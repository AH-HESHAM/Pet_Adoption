import './postStyle.css';
import React, { useState } from 'react';

const PostsList = ()=>{
    const [listToShow, setListToShow] = useState([
        {
            id: 1,
            date: '1-1-2001',
            shelter: "shelter name",
            name: "lolo",
            species: "dog",
            breed: "kalb balady",
            age: 5,
            gender: "male",
            description: "el kalb lolo how how el kalb lolo how how ",
            spaying: false,
            houseTraining: "middle",
            vaccinations: ["v1", "v2"],
            behavior: "nice",
            healthState: "good"
        },
        {
            id: 2,
            date: '1-1-2001',
            shelter: "shelter name",
            name: "lolo",
            species: "dog",
            breed: "kalb balady",
            age: 5,
            gender: "male",
            description: "el kalb lolo how how el kalb lolo how how ",
            spaying: false,
            houseTraining: "middle",
            vaccinations: ["v1", "v2"],
            behavior: "nice",
            healthState: "good"
        },
        {
            id: 3,
            date: '1-1-2001',
            shelter: "shelter name",
            name: "lolo",
            species: "dog",
            breed: "kalb balady",
            age: 5,
            gender: "male",
            description: "el kalb lolo how how el kalb lolo how how ",
            spaying: false,
            houseTraining: "middle",
            vaccinations: ["v1", "v2"],
            behavior: "nice",
            healthState: "good"
        },
        {
            id: 4,
            date: '1-1-2001',
            shelter: "shelter name",
            name: "lolo",
            species: "dog",
            breed: "kalb balady",
            age: 5,
            gender: "male",
            description: "el kalb lolo how how el kalb lolo how how ",
            spaying: false,
            houseTraining: "middle",
            vaccinations: ["v1", "v2"],
            behavior: "nice",
            healthState: "good"
        }
    ])

    // useEffect(() => {
    //     const getPosts = async () => {
    //     const posts = await postsRequest;
    //     setListToShow(posts)
    //     };
    //     getPosts();
    // }, []);

    return(
        <div>
            <div className='logo adoptionLogo'></div>
            <div className="adopterAllPosts">
                {listToShow.map((value) =>(
                    <div className='adopterPost' key={value.id}>
                        <div className='adopterPostHeader'>
                            <div className='adopterPostShelterIcon'></div>
                            <p className='adopterPostShelter'>{value.shelter}</p>
                        </div>

                        <p className='adopterPostDate'>{value.date}</p>

                        
                        <div>
                            <label className='adopterPostInfoTitle'>Name: </label>
                            <label className='postInfo'>{value.name}</label>
                        </div>
                        
                        <div>
                            <label className='adopterPostInfoTitle'>Species: </label>
                            <label className='adopterPostInfo'>{value.species}</label>
                        </div>
                        
                        <div>
                            <label className='adopterPostInfoTitle'>Breed: </label>
                            <label className='adopterPostInfo'>{value.breed}</label>
                        </div>
                        
                        <div>
                            <label className='adopterPostInfoTitle'>Age: </label>
                            <label className='adopterPostInfo'>{value.age}</label>
                        </div>
                        
                        <div>
                            <label className='adopterPostInfoTitle'>Gender: </label>
                            <label className='adopterPostInfo'>{value.gender}</label>
                        </div>
                        
                        <div>
                            <label className='adopterPostInfoTitle'>Description: </label>
                            <label className='adopterPostInfo'>{value.description}</label>
                        </div>
                        
                        <div>
                            <label className='adopterPostInfoTitle'>Spaying: </label> 
                            <label className='adopterPostInfo'>{value.spaying? "yes" : "no"}</label>
                        </div>
                        
                        <div>
                            <label className='adopterPostInfoTitle'>HouseTraining: </label> 
                            <label className='adopterPostInfo'>{value.houseTraining}</label> 
                        </div>
                        
                        <div>
                            <label className='adopterPostInfoTitle'>Vaccinations: </label>
                            <label className='adopterPostInfo'>{value.vaccinations}</label>
                        </div>
                        
                        <div>
                            <label className='adopterPostInfoTitle'>Behavior: </label>
                            <label className='adopterPostInfo'>{value.behavior}</label>
                        </div>
                        
                        <div>
                            <label className='adopterPostInfoTitle'>HealthState: </label>
                            <label className='adopterPostInfo'>{value.healthState}</label>
                        </div>
                        
                        <button className='adoptionBtn'>Request Adoption</button>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}
export default PostsList