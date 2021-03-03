import { FormGroup } from "@angular/forms";

export function phoneNumberChecker(
    control:string){

        return (
           formgroup:FormGroup  
        )=>{
          const  phonenumber=formgroup.controls[control]
          if(typeof phonenumber.value === "number"){
              
              if(phonenumber.value.toString().length === 10){
                phonenumber.setErrors(null)
              }else{
                phonenumber.setErrors({phonenumber:true})
              }
          }else{
            phonenumber.setErrors({phonenumber:true})
          }
        }
}