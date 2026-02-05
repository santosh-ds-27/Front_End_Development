import React, { useEffect, useState } from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

function Rooms() {

    const [rooms,setrooms] = useState ([])

    const fetchdata = async()=>{
        const res = await axios.get("http://localhost:3000/room")
        console.log(res.data);
        setrooms(res.data)
    }

    useEffect(()=>{
        fetchdata()
    },[])

    return (
        <div>
            <Header />
            <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">Rooms</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li className="current">Rooms</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Rooms 2 Section */}
                <section id="rooms-2" className="rooms-2 section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="room-filters" data-aos="fade-up" data-aos-delay={200}>
                            <div className="row g-3 align-items-center">
                                <div className="col-lg-3 col-md-6">
                                    <label className="form-label">Price Range</label>
                                    <select className="form-select">
                                        <option>All Prices</option>
                                        <option>$100 - $200</option>
                                        <option>$200 - $350</option>
                                        <option>$350+</option>
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <label className="form-label">Guest Capacity</label>
                                    <select className="form-select">
                                        <option>Any Capacity</option>
                                        <option>1-2 Guests</option>
                                        <option>3-4 Guests</option>
                                        <option>5+ Guests</option>
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <label className="form-label">View Type</label>
                                    <select className="form-select">
                                        <option>All Views</option>
                                        <option>Ocean View</option>
                                        <option>City View</option>
                                        <option>Garden View</option>
                                    </select>
                                </div>
                                <div className="col-lg-3 col-md-6">
                                    <label className="form-label">Sort By</label>
                                    <select className="form-select">
                                        <option>Popularity</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Room Size</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="rooms-grid" data-aos="fade-up" data-aos-delay={300}>
                            <div className="row g-4">
                               {
                                rooms && rooms.map((data,index)=>{
                                    return(
                                          <div className="col-xl-4 col-lg-6">
                                    <div className="room-card">
                                        <div className="room-image">
                                            <img src={data.img} alt="Deluxe Ocean Suite" className="img-fluid" />
                                            <div className="room-features">
                                                <span className="feature-badge ocean">Ocean View</span>
                                                <span className="feature-badge popular">Popular</span>
                                            </div>
                                        </div>
                                        <div className="room-content">
                                            <div className="room-header">
                                                <h3>{data.name}</h3>
                                                <div className="room-rating">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                </div>
                                            </div>
                                            <p className="room-description">{data.desc}</p>
                                            <div className="room-amenities">
                                                <span><i className="bi bi-people" /> Up to {data.guest} guests</span>
                                                <span><i className="bi bi-wifi" /> Free WiFi</span>
                                                <span><i className="bi bi-tv" /> Smart TV</span>
                                            </div>
                                            <div className="room-footer">
                                                <div className="room-price">
                                                    <span className="price-from">From</span>
                                                    <span className="price-amount">{data.price}</span>
                                                    <span className="price-period">/ night</span>
                                                </div>
                                                <a href="room-details.html" className="btn-room-details">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    )
                                })
                               }

                            </div>
                    </div>
                        <div className="load-more-section" data-aos="fade-up" data-aos-delay={400}>
                            <div className="text-center">
                                <button className="btn-load-more">
                                    <i className="bi bi-arrow-down-circle" />
                                    Load More Rooms
                                </button>
                            </div>
                        </div>
                    </div>
                </section>{/* /Rooms 2 Section */}
            </main>

            <Footer />
        </div>
    )
}

export default Rooms