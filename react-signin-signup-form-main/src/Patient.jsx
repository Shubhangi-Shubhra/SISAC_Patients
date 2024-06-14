import React, { useState } from "react";
import * as Components from './Components';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

function Patient() {
    const [signIn, toggle] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleDropdownChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <Components.Container>
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form style={{ width: '320px' }}>
                    <Components.Title>Registration form Patient</Components.Title>
                    <Components.Input type='text' placeholder='Name' style={{ width: '100%' }} />
                    <Components.Input type='email' placeholder='Email' style={{ width: '100%' }} />
                    <Components.Input type='tel' placeholder='Phone Number' style={{ width: '100%' }} />
                    <Components.Input type='text' placeholder='Location' style={{ width: '100%' }} />
                    <Components.Input type='text' placeholder='Age' style={{ width: '100%' }} />
                    <Components.Input as="select" style={{ width: '100%' }} onChange={handleDropdownChange} value={selectedOption}>
                        <option value="">Staying</option>
                        <option value="With caretaker">With Caretaker</option>
                        <option value="Alone">Alone</option>
                    </Components.Input>

                    <div style={{ position: 'relative', width: '100%' }}>
                        <Components.Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            style={{ width: '100%' }}
                        />
                        <Icon
                            icon={showPassword ? eyeOff : eye}
                            onClick={handleTogglePassword}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                    <div style={{ position: 'relative', width: '100%' }}>
                        <Components.Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Confirm Password'
                            style={{ width: '100%' }}
                        />
                        <Icon
                            icon={showPassword ? eyeOff : eye}
                            onClick={handleTogglePassword}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                    <Components.Button style={{ width: '100%' }}>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Log in</Components.Title>
                    <Components.Input type='email' placeholder='Email' />
                    <div style={{ position: 'relative', width: '100%' }}>
                        <Components.Input
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            style={{ width: '100%' }}
                        />
                        <Icon
                            icon={showPassword ? eyeOff : eye}
                            onClick={handleTogglePassword}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                right: '10px',
                                transform: 'translateY(-50%)',
                                cursor: 'pointer'
                            }}
                        />
                    </div>
                    <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                    <Components.Button>Submit</Components.Button>
                </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>
                    <Components.LeftOverlayPanel signinIn={signIn}>
                        <Components.Title>Welcome Back to SISAC!</Components.Title>
                        <Components.Paragraph>
                            To keep connected with us please login with your personal info
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(true)}>
                            Sign In
                        </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello, Patient!</Components.Title>
                        <Components.Paragraph>
                            Enter Your personal details and start journey with us
                        </Components.Paragraph>
                        <Components.GhostButton onClick={() => toggle(false)}>
                            Sign Up
                        </Components.GhostButton>
                    </Components.RightOverlayPanel>
                </Components.Overlay>
            </Components.OverlayContainer>
        </Components.Container>
    );
}

export default Patient;
