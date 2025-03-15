import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const NewPage = () => {

    const createSnippetHandler = async(formData:FormData) =>{
       "use server";
       const title = formData.get("title");
       const code = formData.get("code");

       const res
    }

    return (
        <form>
            <div>
                <Label>Title</Label>
                <Input type='text' name='title' id='title'/>
            </div>
            <div>
                <Label>Code</Label>
                <Textarea name='code' id='code'/>
            </div>
            <Button className='my-4'>New</Button>
        </form>
    );
};

export default NewPage;