import React from 'react'
import Logo2 from '../../assets/img/likelion_logo.svg'
import Instar from '../../assets/img/instar.svg'
import Youtube from '../../assets/img/youtube.svg'
import Branch from '../../assets/img/branch.svg'
import Down from '../../assets/img/download.svg'
import Share from '../../assets/img/share.svg'


const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <div className="left">
          <img src={Logo2} alt="" />
          <p>(주)멋쟁이사자처럼 | 대표이사 나성영</p>
          <p>서울특별시 종로구 종로3길 17 D타워, 16-17층</p>
          <p>사업자 번호 : 264-88-01106</p>
          <p>통신판매업 신고번호 : 2022-서울종로-1534</p>
          <p>✉ 문의처 contact@likelion.net</p>
          <div className="icon">
            <div className="icon_1">
              <div className="instar">
                <img src={Instar} alt="" />
              </div>
            </div>
            <div className="icon_2">
              <div className="youtube">
                <img src={Youtube} alt="" />
              </div>
            </div>
            <div className="icon_3">
              <div className="branch">
                <img src={Branch} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="r1">
            <h3>FAMILY BRAND</h3>
            <p>TECHIT</p>
            <p>SYLTARE</p>
            <p>MODERN LION</p>
            <p>QUADHASH</p>
          </div>
          <div className="r2">
            <h3>POLICY</h3>
            <p>이용약관</p>
            <p>개인정보처리방침</p>
            <div className="down">
              <p>Nonprofit Report</p>
              <img src={Down} alt="" />
            </div>
            <div className="share">
              <p>국민권익위원회</p>
              <img src={Share} alt="" />
            </div>
          </div>
          <div className="r3">
            <h3>RESOURCE</h3>
            <div className="down">
              <p>로고 가이드라인</p>
              <img src={Down} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer