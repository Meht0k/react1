import React from 'react';

function Contact() {
    return (
        <>
            <div className="container py-5" id="contact">
                <div className='row pt-5 mt-5'>
                    <div className='col'>
                        <p className='display-3 text-center fw-bold'>Contact</p>
                    </div>
                </div>
                <div className="row pt-3">
                    <div className='col'>
                        <form class="row g-3 needs-validation" novalidate>
                            <div class="col-md-6">
                                <label for="validationCustom01" class="form-label">First name</label>
                                <input type="text" class="form-control" id="validationCustom01" required placeholder='Enter your firstname' />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="validationCustom02" class="form-label">Last name</label>
                                <input type="text" class="form-control" id="validationCustom02" required placeholder="Enter your lastname" />
                                <div class="valid-feedback">
                                    Looks good!
                                </div>
                            </div>
                            <div class="col-md-5">
                                <label for="validationCustomUsername" class="form-label">Username</label>
                                <div class="input-group has-validation">
                                    <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required placeholder="Enter your email" />
                                    <div class="invalid-feedback">
                                        Please choose a username.
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <label for="validationCustom03" class="form-label">Address</label>
                                <input type="text" class="form-control" id="validationCustom03" required placeholder='Enter your address' />
                                <div class="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-secondary" type="button">Submit form</button>
                            </div>
                        </form></div>
                </div>
            </div>
        </>
    )
}

export default Contact;
