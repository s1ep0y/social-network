import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DeleteIcon from '../../img/icons/delete.svg';
import MessageIcon from '../../img/icons/message.svg';

const SingleFriendWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  padding: 51px 0px;
  border-bottom: 1px solid #b2b2b2;
`;

const FriendAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const FriendAvatarWrapper = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 37px;
`;

const BaseButtonStyle = `
    transition: background-color 0.2s;
    height: 28px;
    width: 28px;
    border: none;
    background-color: #515151;
    mask-size: cover;
    justify-self: flex-end;
    &:hover{
        background-color: #111;
    };
`;

const DeleteButton = styled.button`
    ${BaseButtonStyle}
    mask-image: url(${DeleteIcon});
    margin-left: 69px;
`;

const MessageButton = styled.button`
    ${BaseButtonStyle}
    mask-image: url(${MessageIcon});
`;

const FriendInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const FriendFullName = styled.span`
  color: #000000;
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 18px;
`;

const FriendProfession = styled.span`
  color: #515151;
  font-size: 16px;
`;

const Placer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
`;

const SingleFriend = (props) => {
  const {
    firstname,
    lastname,
    profesion,
    avatarka,
    deleteButtonHandler,
    messegeButtonHandler,
  } = props;
  return (
    <SingleFriendWrapper>
      <Placer>
        <FriendAvatarWrapper>
          <FriendAvatar src={avatarka} alt="there should be avatarka" />
        </FriendAvatarWrapper>
        <FriendInfo>
          <FriendFullName>
            {firstname} {lastname}
          </FriendFullName>
          <FriendProfession>{profesion}</FriendProfession>
        </FriendInfo>
      </Placer>
      <Placer>
        <MessageButton onClick={messegeButtonHandler} />
        <DeleteButton onClick={deleteButtonHandler} />
      </Placer>
    </SingleFriendWrapper>
  );
};

SingleFriend.defaultProps = {
  firstname: '',
  lastname: '',
  profesion: '',
  avatarka: '',
  deleteButtonHandler: () => {},
  messegeButtonHandler: () => {},
};

SingleFriend.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  profesion: PropTypes.string,
  avatarka: PropTypes.string,
  deleteButtonHandler: PropTypes.func,
  messegeButtonHandler: PropTypes.func,
};

export default SingleFriend;
