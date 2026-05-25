import React from 'react'
import S3_img1 from '../../assets/img/section03_1.png'
import S3_img2 from '../../assets/img/section03_2.png'
import S3_img3 from '../../assets/img/section03_3.png'

const Section03 = () => {
  return (
    <div>
      <div className="Section03_wrap">
        <div className="s3_top">
          <img src={S3_img1} alt="" />
          <div className="s3_top_txt">
            <div className="tage">
              <p>VISION</p>
            </div>
            <h2>IT 교육 기회를 제공하여<br/>꿈꾸던 가능성을 열어준다.</h2>
            <p>Open up the possibility of dreaming by providing<br/>IT education opportunities.</p>
          </div>
        </div>
        <div className="s3_mid">
          <div className="right">
            <div className="tage">
              <p>VISION</p>
            </div>
            <h2>IT 기술로 IT 교육의 문제를<br/>해결한다.</h2>
            <p>Solve IT education problems using IT<br/>technology.</p>
          </div>
          <img src={S3_img2} alt="" />
        </div>
        <div className="s3_bot">
          <img src={S3_img3} alt="" />
          <div className="s3_bot_txt">
            <div className="tage">
              <p>VISION</p>
            </div>
            <h2>지속 성장이 가능한 IT<br/>커뮤니티를 구축한다.</h2>
            <p>Establish an IT community that can sustain<br/>growth.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section03