import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const PromptSettingPage = () => {
  return (
    <div>
      <Card className='m-4'>
        <CardHeader>
          <CardTitle>프롬프트 세팅</CardTitle>
          <CardDescription>프롬프트를 세팅할 수 있습니다.</CardDescription>
        </CardHeader>
        <CardContent>
          <div>안녕</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PromptSettingPage;
