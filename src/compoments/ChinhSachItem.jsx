import React from "react";
const ChinhSachItem = (props) => {
    const Image = props.image;
    const Title = props.title;
    const Dec = props.dec;
    return (
        <div className='row'>
            <div className='col-2'>
                <img src={Image} className='img-fluid' alt='...'/>
            </div>
            <div className='col-8'>
                <p className='p-0 m-0'><strong>{Title}</strong></p>
                <p className='p-0 m-0'><strong>{Dec}</strong></p>
            </div>
        </div>
    )
}
export default ChinhSachItem