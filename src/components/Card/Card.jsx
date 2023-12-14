import styled from 'styled-components';
import noneImg from '../../assets/noneProfileImg.png';
import Badge from '../Badge/Badge';

import deleteBtn from '../../assets/deleted.svg';
import PlusBtn from '../../components/Button/PlusBtn';
import { useState } from 'react';
import OutlinedBtn from '../Button/OutlinedBtn';

const CardBox = styled.article`
  position: relative;
  width: 38.4rem;
  height: 28rem;
  padding: 2.4rem;
  border-radius: 1.6rem;
  background: var(--white, #fff);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
`;

const ProfileBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.4rem;
`;

const ProfileText = styled.div`
  > h1 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4rem;
    margin: 0.6rem 0;

    > span {
      font-weight: 400;
    }
  }
`;

const ProfileImg = styled.img`
  padding: 0;
  width: 5.6rem;
  height: 5.6rem;
  border-radius: 10rem;
  border: 1px solid var(--gray-200, #eee);
  background: var(--white, #fff);
`;

/* Font/18 Regular */
const TextBox = styled.p`
  margin: 1.6rem auto;
  padding-top: 1.6rem;
  width: 100%;
  height: 10.6rem;
  overflow: hidden;
  color: var(--gray-600, #4a4a4a);
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2.8rem;
  letter-spacing: -0.018rem;
  border-top: 0.1rem solid var(--gray-200, #eee);
`;

const MakeDate = styled.span`
  position: relative;
  bottom: -2rem;
  color: var(--gray-400, #999);

  /* Font/12 Regular */

  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.8rem; /* 150% */
  letter-spacing: -0.006rem;
`;

const AddCards = styled(PlusBtn)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const DeleteBtn = styled(OutlinedBtn)`
  padding: 0.8rem;
  margin-left: 11.7rem;
`;

export default function Card({
  deletePage,
  add = false,
  name = 'ddd',
  createAt = '2023.12.12',
  content = '열심히 일하는 모습 멋있습니다.',
  profileImageURL = '',
  modal = '',
}) {
  return (
    <CardBox modal={modal} deletePage={deletePage}>
      {add ? (
        <AddCards></AddCards>
      ) : (
        <>
          <ProfileBox>
            <ProfileImg src={profileImageURL || noneImg} alt="프로필 이미지" />
            <ProfileText>
              <h1>
                <span>From. </span>
                {name}
              </h1>
              <Badge relation="가족" />
            </ProfileText>
            {deletePage ? (
              <DeleteBtn size="md">
                <img src={deleteBtn} alt="삭제하기" />
              </DeleteBtn>
            ) : (
              ''
            )}
          </ProfileBox>
          <TextBox>{content}</TextBox>
          <MakeDate>{createAt}</MakeDate>
        </>
      )}
    </CardBox>
  );
}
