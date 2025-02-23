import React from 'react'

const Component1 = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">Product Name</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label htmlFor="" className="form-label">Category</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label htmlFor="" className="form-label">Price</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label htmlFor="" className="form-label">Manufacturing Date</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label htmlFor="" className="form-label">Expiry</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <label htmlFor="" className="form-label">Manufacturer Name</label>
                    <input type="text" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                        <button className="btn btn-success">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Component1
