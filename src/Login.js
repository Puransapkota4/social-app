import { Button } from '@mui/material';
import React from 'react';
import "./Login.css";


function Login() {

    const signIn =() => {
        //sign .. in 
    }

  return (
    <div className='login'>
        <div className='login__logo'>
            <img
              src="./images/victoria.jpeg"
                alt=''
            />

            <img
               src='https://au.images.search.yahoo.com/search/images;_ylt=Awr1TiVvWMti0y84qWgN5gt.;_ylu=c2VjA3NlYXJjaARzbGsDYnV0dG9u;_ylc=X1MDMjExNDcwOTAwNQRfcgMyBGFjdG4DY2xrBGNzcmNwdmlkA1NZS2VKVEV3TGpJb3V1SXhZcGhuTUFMY01qSXdMZ0FBQUFCT0p2X1MEZnIDbWNhZmVlBGZyMgNzYS1ncARncHJpZANCbDhqS3RjOVN4aWNaWFN4bzV6TklBBG5fc3VnZwMwBG9yaWdpbgNhdS5pbWFnZXMuc2VhcmNoLnlhaG9vLmNvbQRwb3MDMARwcXN0cgMEcHFzdHJsAwRxc3RybAMzMgRxdWVyeQMlMjBzb2NpYWwlMjBhcHAlMjB3cml0dGVuJTIwdGV4dAR0X3N0bXADMTY1NzQ5MzYyMQ--?p=+social+app+written+text&fr=mcafee&fr2=sb-top-au.images.search&ei=UTF-8&x=wrt&type=E210US91214G0#id=13&iurl=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fconceptual-hand-writing-showing-social-media-app-concept-meaning-creation-sharing-ideas-career-interests-via-internet-oval-142552743.jpg&action=click'
                alt=''
            />   
        </div>
        <Button type="submit" onClick={signIn}
        >
            Sign In
        </Button>   
    </div>
  );
}

export default Login;
