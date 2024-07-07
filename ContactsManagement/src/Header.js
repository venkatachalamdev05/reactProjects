import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { db } from "./Firebase";
import './App.css'
import { Alert, Spinner } from "react-bootstrap";

function Header() {
    const [contactDetail, setContactDetail] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [show, setShow] = useState(false);
    const [spinner, setSpinner] = useState(true);

    const navigate = useNavigate();
    function navigateToAddData() {
        navigate("/add");
    }


    useEffect(() => {
        console.log("working");
        db.collection('contacts').orderBy('contactName', 'asc').onSnapshot((result) => {
            setContactDetail(result.docs.map(function (element) {
                let rawData = {
                    id: element.id,
                    ...element.data()
                }
               
                return rawData;
            }))
            setSpinner(false)
        })
        
    }, []);

    function deleteData(item) {
        db.collection('contacts').doc(item.id).delete();
        setShow(true)
    }

    const filteringData = (event) => {
        const value = event.target.value;
        setFilterData(contactDetail.filter(item => {
            return item.contactName.toLowerCase().includes(value.toLowerCase())
        }
        ))
    }


    return (
        <div className="background">

            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />


                <div className="input-align">
                    <div className="input-group flex-nowrap">
                        <input type="text" className="form-control" placeholder="Enter Contact Name To Filter" aria-label="Username" aria-describedby="addon-wrapping" onChange={filteringData} />
                        <button onClick={navigateToAddData} className="btn addBtn">Add</button>
                    </div>
                </div>
                {
                   spinner && <div className="text-center p-4">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                }

                <div>
                    {
                        show && <Alert variant="success" onClose={() => setShow(false)} dismissible>
                            <Alert.Heading></Alert.Heading>
                            <p>
                                Successfully Deleted!
                            </p>
                        </Alert>
                    }
                </div>

                <div className="section_our_solution">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="our_solution_category">
                                <div className="solution_cards_box">
                                    {
                                        filterData.length > 0 ?
                                            filterData.map((item, index) => (
                                                <div className="solution_card" key={index}>
                                                    <div className="hover_color_bubble"></div>
                                                    <div className="solu_title">
                                                        <h2>{item.contactName.substring(0, 1)}</h2>
                                                    </div>
                                                    <div className="solu_description">

                                                        <h5>
                                                            {item.contactName}
                                                        </h5>
                                                        <p>
                                                            {item.contactNumber}
                                                        </p>
                                                        <p>
                                                            {item.contactMail}
                                                        </p>
                                                        <button type="button" className="read_more_btn ms-2" onClick={() => deleteData(item)}>Delete</button>
                                                    </div>
                                                </div>
                                            )) : contactDetail.map((item, index) => (
                                                <div className="solution_card" key={index}>
                                                    <div className="hover_color_bubble"></div>

                                                    <div className="solu_title">
                                                        <h2>{item.contactName.substring(0, 1)}</h2>
                                                    </div>
                                                    <div className="solu_description">

                                                        <h5>
                                                            {item.contactName}
                                                        </h5>
                                                        <p>
                                                            {item.contactNumber}
                                                        </p>
                                                        <p>
                                                            {item.contactMail}
                                                        </p>
                                                        <button type="button" className="read_more_btn ms-2" onClick={() => deleteData(item)}>Delete</button>
                                                    </div>
                                                </div>
                                            ))
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {
                    !spinner && contactDetail.length == 0 && filterData.length == 0 && <p className="text-center">No Contacts To Show</p>
                }
            </div>

        </div >
    )
};

export default Header;
