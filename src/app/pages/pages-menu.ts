import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
  title: '',
        link: '/auth/login',
  
      },
  {
    title: 'AI-Cart',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      
    ],
  },
  
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      // {
      //   title: 'Register',
      //   link: '/auth/register',
      // },
      // {
      //   title: 'Request Password',
      //   link: '/auth/request-password',
      // },
      // {
      //   title: 'Reset Password',
      //   link: '/auth/reset-password',
      // },
    ],
  },
];
