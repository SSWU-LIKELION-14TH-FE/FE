import React from "react";
import img01 from '../../assets/img/section03_1.png'
import img02 from '../../assets/img/section03_2.png'
import img03 from '../../assets/img/section03_3.png'
const Section03 = () => {
    return(
        <div className="Section03_wrap">
            <div>
                <img src={img01} alt="" />
                <div className="tage">
                    <p>VISION</p>
                    <h2>IT 교육 기회를 제공하여</h2>
                    <h2>꿈꾸던 가능성을 열어준다.</h2>
                    <p>Open up the possibility of dreaming by providing</p>
                    <p>IT education opportunities.</p>
                </div>
            </div>
            <div>
                <div className='right'>
                    <p className='tage'>VISION</p>
                    <h2>IT 기술로 IT 교육의 문제를</h2>
                    <h2> 해결한다.</h2>
                    <p> Solve IT education problems using IT</p>
                    <p> technology.</p>
                </div>
                <img src={img02} alt="" />
            </div>
            <div>
                <img src={img03} alt="" />
                <div>
                    <p className='tage'>VISION</p>
                    <h2>지속 성장이 가능한 IT </h2>
                    <h2>커뮤니티를 구축한다.</h2>
                    <p>Establish an IT community that can sustain</p>
                    <p> growth.</p>
                </div>
            </div>
        </div>
    )
}

export default Section03