import React from 'react';
import "./Study.css";

const Study = () => {
    return (
        <div>
            <h2 className='study-head text-center'>Study <span className='text-danger'>Tips And Tricks</span></h2>
            <img className='study' src="https://i.pinimg.com/originals/5b/83/ef/5b83ef5ba73ca499f556bce1859dd9ab.gif" alt="" />
            <br />
            <div className="tips">
                <div class="container">
                    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 mb-5">
                        <div class="col">
                            <div class="p-3 shadow ">Bangla 1st Paper</div>
                        </div>
                        <div class="col">
                            <div class="p-3 shadow ">Bangla 2nd Paper</div>
                        </div>
                        <div class="col">
                            <div class="p-3 shadow ">English 1st Paper</div>
                        </div>
                        <div class="col">
                            <div class="p-3 shadow ">English 2nd Paper</div>
                        </div>
                        <div class="col">
                            <div class="p-3 shadow ">Mathematics</div>
                        </div>
                        <div class="col">
                            <div class="p-3 shadow ">Biology</div>
                        </div>
                        <div class="col">
                            <div class="p-3 shadow ">Physics</div>
                        </div>
                        <div class="col">
                            <div class="p-3 shadow ">Chemistry</div>
                        </div>
                        <div class="col">
                            <div class="p-3 shadow ">Islamic Study</div>
                        </div>
                        <div class="col">
                            <div class="p-3 shadow ">Agriculture</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Study;