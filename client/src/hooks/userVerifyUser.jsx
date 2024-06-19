import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { removeUser } from '../utils/userSlice';
import { API_URL } from '../utils/constants';

const useVerifyUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { userToken, isAuthenticated } = useSelector(state => state.user);

  useEffect(() => {
    const verifyUserStatus = async () => {
      if (isAuthenticated) {
        try {
          const response = await axios.get(API_URL+'api/verify-user', {
            headers: {
              Authorization: `Bearer ${userToken}`
            }
          });
          console.log(response)

          if (!response.data.isValid) {
            dispatch(removeUser());
            navigate('/');
          }
        } catch (error) {
          console.error('Failed to verify user status', error);
          dispatch(removeUser());
          navigate('/');
        }
      }
    };

    verifyUserStatus();
  }, [isAuthenticated, userToken , dispatch, navigate]);
};

export default useVerifyUser;
