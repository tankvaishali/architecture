import React from 'react';
import HOC from '../../HOC/HOC';
import { useParams } from 'react-router-dom';
import { ProjectList } from './ProjectListItem';

function ProjectInnerList() {
    const { id, id2 } = useParams();

    const selectedProject = ProjectList.find((item) => item.id === id);
    console.log(selectedProject);

    const selectedInnerData = selectedProject?.inner_data.find(
        (inner) => inner.id === id2
    );
    console.log(selectedInnerData);


    return (
        <>
            <div>
                <div>
                    <h1>{selectedInnerData.h1}</h1>
                    <img src={selectedInnerData.mainimg} alt="" className='img-fluid' />
                    <div className='d-flex flex-wrap'>
                        {selectedInnerData.img.map((item, i) => {
                            return (
                                <div className='col-3' key={i}>
                                    <img src={item} alt="" className='img-fluid' />
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default HOC(ProjectInnerList);
