import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import axios from 'axios'

function RoomManage() {
    const [room, setroom] = useState([])
    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/room")
        setroom(res.data)

    }
    useEffect(() => {
        fetchdata()
    }, [])
    const [single, setsingle] = useState({
        id: "",
        name: "",
        guests: "",
        price: "",
        type: "",
        img: ""
    })
    const singlecard = async (id) => {
        const res = await axios.get(`http://localhost:3000/room/${id}`)
        console.log(res.data)
        setsingle(res.data)
    }

    const deleteCard = async (id) => {
        const res = await axios.delete(`http://localhost:3000/room/${id}`)
        console.log(res.data)
        fetchdata()
    }

    //    Update process modal..
    const [edit, setedit] = useState(null)

    // data show...
    const [edited, setedited] = useState({
        id: "",
        name: "",
        guests: "",
        price: "",
        type: "",
        img: ""
    })
    //  for data get and show...
    const getdata = (data) => {
        console.log(data);
        setedit(data)
        setedited(data)
    }

    // for data change...
    const getchange = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
    }

    // for submtdata...
    const submitdata = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/room/${edited.id}`, edited)
            console.log(res.data);
            setedited({
                id: "",
                name: "",
                guests: "",
                price: "",
                type: "",
                img: ""

            })
            setedit(null)
            fetchdata()


        } catch (error) {
            console.log("Api data not found", error);


        }
    }


    return (
        <div>
            <Aheader />
            <div className="container">
                <h1 className='text-center'>Room Manage</h1>
                <table class="table">
                    <thead>
                        <tr class="text-center">
                            <th scope="col">#id</th>
                             <th scope="col">img</th>
                            <th scope="col">name</th>
                            <th scope="col">guests</th>
                            <th scope="col">price</th>
                            <th scope="col">type</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            room && room.map((data, index) => {
                                console.log(data);
                                return (
                                    <tr key={index} className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td>
                                            <img src={data.img} style={{ width: "100px" }} alt="" />
                                        </td>
                                        <td>{data.name}</td>
                                        <td>{data.guests}</td>
                                        <td>{data.price}</td>
                                        <td>{data.type}</td>
                                        <td>
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => singlecard(data.id)}>View</button>
                                            <button className='btn btn-success mx-2' onClick={() => getdata(data)}>Edit</button>
                                            <button className='btn btn-danger' onClick={() => deleteCard(data.id)}>Delete</button>
                                        </td>

                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
                {/* View Modal */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div className="room-card">
                                    <div className="room-image">
                                        <img src={single.img} alt="Deluxe Ocean Suite" className="img-fluid" />
                                        <div className="room-features">
                                            <span className="feature-badge ocean">Ocean View</span>
                                            <span className="feature-badge popular">Popular</span>
                                        </div>
                                    </div>
                                    <div className="room-content">
                                        <div className="room-header">
                                            <h3>{single.name}</h3>
                                            <div className="room-rating">
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                                <i className="bi bi-star-fill" />
                                            </div>
                                        </div>
                                        <p className="room-description">{single.desc}</p>
                                        <div className="room-amenities">
                                            <span><i className="bi bi-people" /> Up to {single.guests} guests</span>
                                            <span><i className="bi bi-wifi" /> Free WiFi</span>
                                            <span><i className="bi bi-tv" /> Smart TV</span>
                                        </div>
                                        <div className="room-footer">
                                            <div className="room-price">
                                                <span className="price-from">From</span>
                                                <span className="price-amount">{single.price}</span>
                                                <span className="price-period">/ night</span>
                                            </div>
                                            <a href="room-details.html" className="btn-room-details">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Edit... */}
                {
                    edit && (
                        <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                            <div className="col-lg-10">
                                <div className="contact-form-wrapper">
                                    <h2 className="text-center mb-4">Send a Message</h2>
                                    <form method="post" className="php-email-form" onSubmit={submitdata}>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input value={edited.name} onChange={getchange} type="text" className="form-control" name="name" placeholder="Your Name" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input value={edited.price} onChange={getchange} type="text" className="form-control" name="price" placeholder="Enter Your Price" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input value={edited.type} onChange={getchange} type="text" className="form-control" name="type" placeholder="Enter Your Type" required />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <select name="guests" className='form-select' value={edited.guests} onChange={getchange} required >
                                                        <option value hidden> Choose guests</option>
                                                        <option value={1}> 1 guests</option>
                                                        <option value={2}> 2 guests</option>
                                                        <option value={3}> 3 guests</option>
                                                        <option value={4}> 4 guests</option>
                                                        <option value={5}> 5 guests</option>
                                                        <option value={6}> 6 guests</option>
                                                        <option value={7}> 7 guests</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input value={edited.img} onChange={getchange} type="url" className="form-control" name="img" placeholder="Enter Your Image" required />
                                                </div>
                                            </div>


                                            <div className="col-12 text-center">
                                                <button onSubmit={submitdata} type="submit" className="btn-submit">SEND DATA</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>
        </div>
    )
}

export default RoomManage
