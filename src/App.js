import React, { Component } from 'react';
import Batch from './batch';
import Test from './test';

class App extends Component {
  state = {
    asd : []
  }
  constructor(props) {
    super(props);
    for (let i = 0; i < 10; i++) {
      this.state.asd.push(<Batch></Batch>);
    }
  };
  componentDidMount() {
    this.runTimmer();
  }

  runTimmer = () => {
    // setInterval(() =>{ 
    //   console.log('componentDidMount');

    //   const newArr = [...this.state.asd];
    //   newArr.push(<Batch />);

    //   this.setState({
    //     asd : newArr
    //   })
    //  }, 1000);
  }


  render(){
    console.log('render');
    return(
      <Test>
        <Batch />
      </Test>
    )
  }
  
}
export default App;


/**
   * 생성자
   * 제일 최초로 실행됨
   * 생략 가능
   */
  // constructor(props){}
  /**
   * 화면에 객체가 표출된 다음에 실행되는 함수
   *  즉 render함수가 처음 실행된 다음에 실행되는 함수
   */
  // componentDidMount() {}
  /**
   * setState함수가 실행되면 즉 state값 변동 시 실행되는 함수
   * 리턴값이 true면 컴포넌트 리렌더링 실행 즉, render함수를 다시 실행
   * 컴포넌트 리렌더링 여부를 결정하는 함수이며 컴포넌트 최적화를 담당함
   */
  // shouldComponentUpdate(newProp, newState) {}
  /**
   * 컴포넌트가 리렌더링되기로 했을 때 실행되는 함수
   * 이 함수의 리턴값은 componentDidUpdate함수의 3번째 인자로 받을 수 있음
   */
  // getSnapshotBeforeUpdate(prevProps, prevState) {}
  /**
   * 컴포넌트 리렌더링 이후
   * 즉, render()함수가 (최초실행 제외)실행된 이후에 실행되는 함수
   * getSnapshotBeforeUpdate함수의 리턴값을 이 함수의 3번째 인자로 받음
   */
  // componentDidUpdate(prevProps, prevState, snapshot) {}
  /**
   * 컴포넌트 소멸자
   * 클래스 소멸자 아님
   */
  // componentWillUnmount() {}
  /**
   * 자식컴포넌트 render함수에서 에러 발생시 실행되는 함수
   * 자기자신의 render함수 에러시에는 실행 안됨
   */
  // componentDidCatch(error, info) {}
