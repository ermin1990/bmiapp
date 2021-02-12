import React from "react";




function AddUser() {
  
  
  return (
    <div className="container-fluid text-left d-flex justify-content-center">
      <form className="text-center d-flex">
        <div className="form-group">
          <h3>Unesite tražene podatke</h3>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Unesite ime i prezime"
            name="imeiprezime"
            
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Koliko dijete ima godina"
            name="godina"
            
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Visina djeteta"
            name="visina"
            
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Težina"
            name="kliogrami"
            
          />
          <br />
          <hr />
          <button className="btn btn-warning">
            Snimi podatke
          </button>
         
        </div>
        
      </form>
    
    </div>
  );
}


export default AddUser;
