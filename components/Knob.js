import React from 'react';
import styled from 'styled-components'

import {
    CircularInput,
    CircularTrack,
    CircularProgress,
    CircularThumb,
} from 'react-circular-input';

const Wrapper = styled.div`
    width: 150px;
    height: 150px;
`
const Title = styled.h4`
    position: relative;
    text-align:center;
    color: white;
    z-index: 0;
    vertical-align: middle;
`
export default class Knob extends React.Component{
    constructor(props){
        super(props)
        this.state = {value:0.50}
        this.setValue = this.setValue.bind(this);
    } 

    setValue(e){
        this.setState({value:e})
    }

    render(){
    return (
        <Wrapper>
            <Title>{this.props.title}</Title>
        <CircularInput value={this.state.value} onChange={this.setValue}>
            <CircularTrack strokeWidth={5} stroke="#eee" />
	        <CircularProgress stroke={`hsl(${this.state.value * 100}, 100%, 40%)`} />
        </CircularInput>
        </Wrapper>
     )
    }   
}


