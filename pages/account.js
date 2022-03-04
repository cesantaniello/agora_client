import React, {useState, useEffect} from 'react';
import {Icon} from 'semantic-ui-react';
import {useRouter} from 'next/router';
import BasicLayout from '../layouts/BasicLayout'
import { getMeApi } from '../api/user';
import useAuth from '../hooks/useAuth';
import ChangeNameForm from '../components/Account/ChangeNameForm';
import ChangeEmailForm from '../components/Account/ChangeEmailForm';
import ChangePasswordForm from '../components/Account/ChangePasswordForm';

export default function Account() {
  const [user, setUser] = useState(undefined);
  const {auth, logout, setReloadUser} = useAuth();
  const router = useRouter();

  useEffect(() => {
    (async() => {
      const response = await getMeApi(logout);
      setUser(response || null);
    })();
  }, [auth]);

  if(user === undefined) return null;
  
  if(!auth && !user) {
    router.replace("/");
    return null;
  }

  return (
    <BasicLayout className="account">
      <Configuration user={user} logout={logout} setReloadUser={setReloadUser}/>
      <Addresses/>
    </BasicLayout>
  )
}

function Configuration(props){
  const {user, logout, setReloadUser} = props;
  return (
    <div className="account__configuration">
      <div className="title">Configuración</div>
      <div className="data">
        <ChangeNameForm user={user} logout={logout} setReloadUser={setReloadUser}/>
        <ChangeEmailForm user={user} logout={logout} setReloadUser={setReloadUser}/>
        <ChangePasswordForm user={user} logout={logout}/>
      </div>
    </div>
  )
}

function Addresses(){
  return (
    <div className="account__addresses">
      <div className="title">
        Direcciones 
        <Icon name="plus" link />
      </div>
      <div className="data">
        <p>Lista de direcciones...</p>
      </div>
    </div>
  )
}