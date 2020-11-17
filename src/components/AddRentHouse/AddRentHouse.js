import React from 'react';
import uploadIcon from '../../logos/cloud-upload-outline 1.png'

const AddRentHouse = () => {
  return (
    <div class=" pl-4  bg-white container-fluid pt-4 rounded-lg  ">
      <form >
        <div class="row pb-2">
          <div class="col">
            <label for="Service Title" class="font-weight-bold">Service Title</label>
            <input type="text" class="form-control" placeholder="Enter title" />
          </div>
          <div class="col">
            <label for="Price" class="font-weight-bold">Price</label>
            <input type="text" class="form-control" placeholder="Price" />
          </div>
        </div>
        <div class="row pb-2">
          <div class="col">
            <label for="Location" class="font-weight-bold">Location</label>
            <input type="text" class="form-control" placeholder="Location" />
          </div>
          <div class="col">
            <label for="No of Bedroom" class="font-weight-bold">No of Bedroom</label>
            <input type="text" class="form-control" placeholder="Number" />
          </div>
        </div>
        <div class="row pb-4">
          <div class="col">
            <label for="No of Bathroom" class="font-weight-bold">No of Bathroom</label>
            <input type="text" class="form-control" placeholder="Number" />
          </div>
          <div class="col">
            <label for="Thumbnail" class="font-weight-bold ">Thumbnail</label>
            <label className="fileLabel rounded"> <img style={{ height: "12%", width: "12%" }} src={uploadIcon} alt="" /> Upload image
              <input type="file" class="form-control" placeholder="" />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddRentHouse;