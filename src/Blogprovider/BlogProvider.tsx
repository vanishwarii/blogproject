import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

export interface BlogDetailsType {
  blogDateof: string;
  blogMonthof: string;
  blogDescriptionOf: string;
  blogHeadingOf: string;
  blogEmailof: string;
  blogTag1: string;
  blogTagg2: string;
  blogYear:string;
}

export interface AppContextType {
  BlogDetails: Array<BlogDetailsType>;
  addNewBlog: (data:BlogDetailsType) => {};
}

export const AppContext = createContext({} as AppContextType);

export const useAppContext = () => useContext(AppContext);

const BlogProvider = (props:any) => {
  const { children } = props;
  const [BlogDetails, setBlogDetails] = useState<Array<BlogDetailsType>>([]);
  useEffect(() => {
    setBlogDetails([
      {
        blogDateof: '27',
        blogMonthof: 'MAY',
        blogDescriptionOf:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla urna. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Urna molestie at elementum eu facilisis sed odio morbi. Eget mi proin sed libero enim. Quis varius quam quisque id diam vel quam. Duis at tellus at urna condimentum mattis pellentesque. Nulla facilisi cras fermentum odio eu feugiat pretium nibh.Ut tellus elementum sagittis vitae et leo. Cursus in hac habitasse platea dictumst quisque sagittis purus. Odio facilisis mauris sit amet. Quis vel eros donec ac odio. Orci a scelerisque purus semper. Amet justo donec enim diam vulputate ut pharetra. Arcu odio ut sem nulla pharetra diam sit amet nisl. Sapien eget mi proin sed libero enim. Nunc sed blandit libero volutpat sed cras ornare arcu dui. Neque viverra justo nec ultrices dui sapien eget mi.Cras semper auctor neque vitae tempus quam pellentesque nec nam. Vitae tortor condimentum lacinia quis vel eros donec ac. Consectetur adipiscing elit pellentesque habitant morbi. Enim tortor at auctor urna nunc id cursus metus. Elit sed vulputate mi sit. Quis viverra nibh cras pulvinar mattis nunc sed. In aliquam sem fringilla ut morbi tincidunt. Orci a scelerisque purus semper. Dignissim sodales ut eu sem integer vitae justo. ',
        blogHeadingOf:
          '15 Disadvantages Of Freedom And How You Can Workaround It.',
        blogEmailof: '@samurai2099',
        blogTag1: '#meditation',
        blogTagg2: '#mentalpeace',
        blogYear: '2022'
      },
      {
        blogDateof: '27',
        blogMonthof: 'MAY',
        blogDescriptionOf:
          'Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Amet risus nullam eget felis. Neque laoreet suspendisse interdum consectetur libero id. Fringilla urna porttitor rhoncus dolor. Pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Quam adipiscing vitae proin sagittis nisl. Diam quis enim lobortis scelerisque fermentum dui. Fames ac turpis egestas maecenas pharetra convallis posuere morbi. Amet risus nullam eget felis. Neque laoreet suspendisse interdum consectetur libero id. Fringilla urna porttitor rhoncus dolor. Pulvinar sapien et ligula ullamcorper malesuada proin. Massa eget egestas purus viverra accumsan in nisl. Quam adipiscing vitae proin sagittis nisl',
        blogHeadingOf: 'The Death Of Freedom.',
        blogEmailof: '@vanish2099',
        blogTag1: '#anarchy',
        blogTagg2: '#silence',
        blogYear: '2022'
      },
    ]);
  }, []);

  const addNewBlog = (addBlogDetails: BlogDetailsType) => {
    const addNewBlogItems = [...BlogDetails];
    addNewBlogItems.push(addBlogDetails);
    setBlogDetails(addNewBlogItems);
  };

  const value = {
    BlogDetails,
    addNewBlog,
  } as AppContextType;

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default BlogProvider;