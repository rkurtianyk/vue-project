import axios from 'axios';

const BreedService = {

  async getList () {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');

    return response.data.map(item => item.name);

    // const arrayOfInitialBreeds = Object.entries(response.data.message);

    // return Array.from(arrayOfInitialBreeds)
    //   .map((item: any) => {
    //     const baseBreed = item[0];
    //     const additionalBreeds: Array<any> = item[1];


    //     if (additionalBreeds.length > 0) {
    //       return additionalBreeds.map(el => `${el} ${baseBreed}`).join();
    //     } else {
    //       return baseBreed;
    //     }

    //   })
  },

}

export default BreedService;