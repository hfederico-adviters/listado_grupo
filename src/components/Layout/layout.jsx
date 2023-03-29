const Layout = ({titulo , children}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <div style={{display:"flex" , justifyContent:"center" , height:"100px" , backgroundColor:"grey"}}>
        <h2>{titulo}</h2>
      </div>
      <div style={{height:"100%"}}>
        {children}
      </div>
      <div style={{display:"flex" , justifyContent:"center" , height:"100px" , backgroundColor:"grey"}}>
        <h3>Footer</h3>
      </div>
    </div>
  );
};
export default Layout;
