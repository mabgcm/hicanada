import React from 'react'

const Emergency = () => {
    return (
        <div>
            <h6 className='text-danger'>emergency care</h6>
            <p className='mb-4'><strong>In the event of a medical emergency in Canada, it is important to call 911 immediately. This emergency number can be dialed from any phone, including cell phones, and is free to use.</strong></p>
            <p><strong>When calling 911, be prepared to provide the operator with the following information:</strong></p>
            <ul className='mx-5 w-75'>
                <li className='faq'><p><strong>+ Your name and phone number</strong></p></li>
                <li className='faq'><p><strong>+ The location of the emergency</strong></p></li>
                <li className='faq'><p><strong>+ A brief description of the emergency</strong></p></li>
            </ul>
            <p className='mt-4'><strong>Once the ambulance arrives, the paramedics will assess the situation and transport the patient to the nearest hospital emergency room for treatment.</strong></p>
            <p className='mt-4'><strong>The emergency care is covered under the provincial/territorial health insurance plan, regardless of the patient's legal status or ability to pay. However, any non-emergency medical services received in an emergency room may not be covered and may result in out-of-pocket expenses.</strong></p>
        </div>
    )
}

export default Emergency