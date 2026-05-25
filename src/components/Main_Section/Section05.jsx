import React from 'react'
import S5_img1 from '../../assets/img/section04_1.png'
import S5_img2 from '../../assets/img/section04_2.png'
import S5_img3 from '../../assets/img/section04_3.png'
import S5_img4 from '../../assets/img/section04_4.png'


const Section05 = () => {
  return (
    <div>
      <div className="Section05_wrap">
        <div className="header">
          <h3>LIKELION MEDIA</h3>
          <h1>언론 속의 LIKELION</h1>
        </div>
        <div className="main">


          <div className="s5_1">
            <img src={S5_img1} alt="" />
            <div className="s5_1_txt">
              <h3>“비즈니스 문제 해커톤으로 해 결”…멋쟁이사자처럼, 기업 해커톤 출시</h3>
              <div className="text">
                <p>정보기술(IT) 교육 기업 멋쟁이사자처럼(멋사)은 31일부터 해커톤 참가자들을 통해 기업이 가진 비즈니스 문제를...</p>
              </div>
              <div className="info">
                <p>머니S | 2023.10.31</p>
              </div>
            </div>
          </div>

          <div className="s5_2">
            <img src={S5_img2} alt="" />
            <div className="s5_1_txt">
              <h3>P2E ‘실타래‘, 편의성 강화해 진입 장벽 낮춘다</h3>
              <div className="text">
                <p>멋쟁이사자처럼은 메타콩즈뿐 아니라 여러 갈래의 대체불가토큰(NFT) 사업을 펼쳤다. 멋쟁이사자처럼 산하 블록...</p>
              </div>
              <div className="info">
                <p>더별 | 2023.01.27</p>
              </div>
            </div>
          </div>

          <div className="s5_3">
            <img src={S5_img3} alt="" />
            <div className="s5_1_txt">
              <h3>콘크릿, 글로벌 아티스트 톰 삭스와 이태원 전역에서 보물찾기 진행</h3>
              <div className="text">
                <p>현대카드와 멋쟁이사자처럼의 합작법인 모던라이언이 운영하는 NFT 마켓플레이스 ‘KONKRIT(이하 콘크릿)’이...</p>
              </div>
              <div className="info">
                <p>경향게임스 | 2023.09.13</p>
              </div>
            </div>
          </div>

          <div className="s5_4">
            <img src={S5_img4} alt="" />
            <div className="s5_1_txt">
              <h3>멋쟁이사자처럼, 아트 NFT·실물 연계 ‘쿼드해시‘ 프로젝트 띄운다</h3>
              <div className="text">
                <p>멋쟁이사자처럼이 아트NFT와 실물을 연계한 대체불가토큰(NFT) 프로젝트 쿼드해시를 추진한다.</p>
              </div>
              <div className="info">
                <p>디지털투데이 | 2023.09.27</p>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Section05