import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import downloadAndSaveFile from '@/lib/download-and-save-file';
import { supabase } from '@/lib/supabase/db';
import { emit } from '@tauri-apps/api/event';

const onStartServer = () => {
  //   console.log('클릭');
  emit('start-server');
};

const AiChatPage = () => {
  return (
    <div>
      <Button
        className='active:scale-95 transition duration-200'
        onClick={onStartServer}
      >
        서버 시작하기
      </Button>
      <Button
        className='active:scale-95 transition duration-200'
        onClick={() =>
          downloadAndSaveFile(
            'https://qjpzemdbvnmikrzvecmd.supabase.co/storage/v1/object/public/files/private/image1.png?t=2024-01-22T10%3A57%3A44.800Z',
            'test2.png'
          )
        }
      >
        파일 다운로드
      </Button>

      <form
        onSubmit={async (event: any) => {
          event.preventDefault();

          const file = event.target.file.files[0];

          // 현재 시간을 이용한 타임스탬프 생성
          const timestamp = new Date().getTime();
          // 원본 파일명
          const originalName = file.name;
          // 파일 확장자
          const extension = originalName.split('.').pop();
          // 새로운 파일명 생성
          const newFileName = `private/${timestamp}-${originalName}.${extension}`;

          const { data, error } = await supabase.storage
            .from('files')
            .upload(newFileName, file, {
              cacheControl: '3600',
              upsert: false,
            });

          console.log(data);
          console.log(error);
        }}
      >
        <Input type='file' name='file'></Input>
        <Button className='active:scale-95 transition duration-200'>
          파일 업로드
        </Button>
      </form>
    </div>
  );
};

export default AiChatPage;
