import avatar from '../src/images/avatar/dinosaur.png';
import logo from '../src/images/logo/mars.svg';
// 运行时配置

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// Layout 사용자 정보 및 권한 초기화에 사용되는 전역 초기화 데이터 구성
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
// export async function getInitialState(): Promise<{ name: string }> {
//   return { name: 'jinsu' };
// }
export async function getInitialState() {
  return { name: 'test', type: 'study', avatar: avatar };
}

export const layout = () => {
  return {
    title: "jin's Dashboard",
    // logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    logo: logo,
    // icon: logo,
    // rightContentRender: RightContent,
    // footerRender: Footer,
    menu: {
      //   locale: false,
    },
  };
};
