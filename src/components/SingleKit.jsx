import React from 'react';
import PropTypes from 'prop-types';

function SingleKit(props){

  function onClickDrumKit() {
    props.onChangeSingleDrumKit(props.kitName);
  }

  return (
    <div className="single-kit">
      <style jsx>{`
          .single-kit {
            background-color: #262626;
            border-radius: 100%;
            height: 30px;
            margin: 4px;
            margin-top: 0px;
            position: relative;
            width: 30px;
          }

          .single-kit h3 {
            position: absolute;
            top: -14px;
            right: 10px;
          }

          @media screen and (max-width: 580px) {
            .single-kit {
              height: 20px;
              margin: 2px;
              margin-top: 0px;
              position: relative;
              width: 20px;
            }

            .single-kit h3 {
              font-size: 10px;
              top: -6px;
              right: 8px;
            }
          }
      `}</style>
      <h3 onClick={onClickDrumKit}>{props.kitName}</h3>
    </div>
  );
}

SingleKit.propTypes = {
  onChangeSingleDrumKit: PropTypes.func,
  kitName: PropTypes.string
};

export default SingleKit;
