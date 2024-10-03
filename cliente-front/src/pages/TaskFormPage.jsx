import {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import { createTask,deleteTask,updateteTask,getTask  } from '../api/tasks.api';
import {useNavigate,useParams} from 'react-router-dom';

export function TaskFormPage() {
  const { register,handleSubmit,formState:{errors},setValue }=useForm();

  useEffect(()=>{
    async  function loadTask (){
      if (params.id) {
         const res=await getTask(params.id);
         setValue('title',res.data.title)//envia los datos llenados al form para actualizar
         setValue('description',res.data.description)
      }

    }
    loadTask()
  },[]) // [] Ejecutar solo una vez al montar el componente

  const navigate=useNavigate();//para retornar a la pagina señalada
  const params=useParams();//alamacena los parametrosenviados a ala URL
  

  const onSubmit=handleSubmit( async (data)=>{
      if (params.id) {
        await updateteTask(params.id,data);
      }else{
        await createTask(data);
        
      }
      navigate('/tasks');//retormar a esa raiz al finalizar la creacion
  })

  return (
      <div>
          <form  onSubmit={onSubmit} >
            <input type="text" placeholder="Title" 
            {...register("title",{required:true})}
            />
            {errors.title && <span>This field is required</span>}
            <textarea rows="3" placeholder="Description"
              {...register("description",{required:true})}
            >
            </textarea>
            {errors.description && <span>This field is required</span>}
            <button>Save</button>
          </form>
          {params.id && (// existe el id en el params-ruta? ->aparece boton eliminar
              
              <button
                onClick={async()=>{
                  const acepted = window.confirm('Are you sure?')
                  if (acepted) {
                      await deleteTask(params.id);
                      navigate("/tasks");
                    } 
                  }}
              > Delete
              </button>
            )}
      </div>
    )
  }
  