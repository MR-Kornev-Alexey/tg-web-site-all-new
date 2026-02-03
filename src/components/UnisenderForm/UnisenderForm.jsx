import React, { useEffect } from 'react';

const UnisenderForm = () => {
    useEffect(() => {
        // Добавляем скрипт Unisender после монтирования компонента
        const script = document.createElement('script');
        script.src = 'https://shared.s3.unisender.ru/popups/popup.js';
        script.async = true;

        script.onload = () => {
            // Инициализируем форму после загрузки скрипта
            if (window.popupForSubscriptionsForm) {
                window.popupForSubscriptionsForm("https://apig.unisender.com");
            }
        };

        document.body.appendChild(script);

        return () => {
            // Очистка при размонтировании
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            {/* Форма Unisender */}
            <div
                id="static-form-container"
                data-url="https://cp.unisender.com/ru/v5/subscribe-form/view/6g8c7e6sjhbczr481u91hsyphjxj3kom37mjgzso"
                data-settings="6jq6zfi6omhzeq36wtx94nanbamecnj8qogupabyt6xrrse5xk3no"
                style={{ display: 'none' }}
                dangerouslySetInnerHTML={{
                    __html: `
            <form method="POST" action="https://cp.unisender.com/ru/subscribe?hash=6ig5iqfa7mr4ty36wtx94nanbajporqhms4f9jmbt75kmtsb7kgry" name="subscribtion_form" us_mode="embed">
              <div class="container responsive">
                <table cellpadding="0" cellspacing="0" align="center" style="width: 100%; box-sizing: border-box; background-color: rgb(204, 204, 204); float: left;">
                  <tbody><tr><td>
                    <table cellpadding="0" cellspacing="0" align="center" style="background-color: rgb(255, 255, 255); border-radius: 0px; max-width: 450px; width: 100%; border: none; margin: 0px auto; border-spacing: 0px; border-collapse: collapse;">
                      <tbody><tr><td width="100%" style="vertical-align: top; max-width: 450px; font-size: 0px; padding: 25px;">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width: 100%; table-layout: fixed; height: auto; border-collapse: collapse; border-spacing: 0px; display: inline-table; vertical-align: top; font-size: medium;">
                          <tbody><tr>
                            <td style="width: 100%; padding: 8px; height: 50px;" valign="top">
                              <table border="0" cellspacing="0" cellpadding="0" style="height: 100%; width: 100%; table-layout: fixed; border-spacing: 0px; border-collapse: collapse; min-height: 50px;">
                                <tbody><tr>
                                  <td style="width: 100%; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(34, 34, 34);">
                                    <div style="display:inline-block; width:100%;font-size:0;">
                                      <label style="font-size: 12px; padding: 0px 0px 5px; vertical-align: middle; box-sizing: border-box; width: 32%; display: inline-block; font-family: Arial, Helvetica, sans-serif; color: rgb(34, 34, 34);">
                                        <span>E-mail</span>
                                        <b style="font-size:14px;font-family:Georgia;line-height:10px;"> *</b>
                                      </label>
                                      <div style="display: inline-block; width: 66%;">
                                        <input type="text" name="email" _validator="email" _required="1" style="border-radius: 3px; font: 13px / 1 Arial, Helvetica; padding: 0px 8px; width: 100%; box-sizing: border-box; border: 1px solid rgb(193, 201, 203); background-color: rgb(255, 255, 255); background-image: none; height: 30px;" _label="E-mail" placeholder="">
                                        <div class="error-block" style="display:none;color:#ff592d;font:11px/18px Arial;"></div>
                                      </div>
                                    </div>
                                  </td>
                                </tr></tbody>
                              </table>
                            </td>
                          </tr></tbody>
                        </table>
                        
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width: 100%; table-layout: fixed; height: auto; border-collapse: collapse; border-spacing: 0px; display: inline-table; vertical-align: top; font-size: medium;">
                          <tbody><tr>
                            <td style="width: 100%; background-image: none; min-height: 0px; height: 0px;" valign="top">
                              <table border="0" cellspacing="0" cellpadding="0" style="height: 100%; width: 100%; table-layout: fixed; border-spacing: 0px; border-collapse: collapse; min-height: 0px;">
                                <tbody><tr>
                                  <td style="width: 100%; text-align: center; font-family: Arial, Helvetica, sans-serif; font-size: 12px; color: rgb(34, 34, 34);">
                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="display: inline-table; width: auto; border-spacing: 0px; border-collapse: collapse;">
                                      <tbody><tr>
                                        <td align="center" valign="middle" style="border: none; border-radius: 12px; padding: 15px 20px 17px; background-color: rgb(4, 4, 112); height: 18.8px; min-height: 18.8px;">
                                          <button href="javascript:" target="_blank" style="width: 100%; display: inline-block; text-decoration: none; word-break: break-all; font-size: 14px; font-family: Arial, Helvetica, sans-serif; line-height: 16.8px; color: rgb(255, 255, 255); background-color: rgb(4, 4, 112); border: 0px;">Подписаться</button>
                                        </td>
                                      </tr></tbody>
                                    </table>
                                  </td>
                                </tr></tbody>
                              </table>
                            </td>
                          </tr></tbody>
                        </table>
                        
                        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="width: 100%; table-layout: fixed; height: auto; border-collapse: collapse; border-spacing: 0px; display: inline-table; vertical-align: top; font-size: medium;">
                          <tbody><tr>
                            <td style="width: 100%; padding: 8px; text-align: center;" valign="top">
                              <table border="0" cellspacing="0" cellpadding="0" style="height: 100%; width: 100%; table-layout: fixed; border-spacing: 0px; border-collapse: collapse;">
                                <tbody><tr>
                                  <td style="width:100%;">
                                    <div style="display:inline-block; width:100%;">
                                      <ul style="margin: 0; padding: 0; display: inline-block;">
                                        <li style="list-style:none; margin: 0; padding: 0; display: inline-block;">
                                          <input type="checkbox" data-virtual-name="argument-with-terms" style="font: 12px / 1 Arial, Helvetica; vertical-align: middle; border-radius: 3px; padding: 0px 8px; box-sizing: border-box; border: none; background-color: rgb(255, 255, 255); background-image: none;" _fullerrormessage="Это поле обязательно" _required="1">
                                          <span style="display: inline-block; padding: 0px 0px 1px; vertical-align: middle; box-sizing: border-box;" tabindex="0" spellcheck="false" role="textbox" aria-label="false" aria-describedby="cke_35"> <span style="font-family:Arial,Helvetica,sans-serif; font-size:12px">Я согласен с политикой конфиденциальности</span> </span>
                                        </li>
                                      </ul>
                                      <div class="error-block" style="display:none;color:#ff592d;font:11px/18px Arial;"></div>
                                    </div>
                                  </td>
                                </tr></tbody>
                              </table>
                            </td>
                          </tr></tbody>
                        </table>
                      </td></tr></tbody>
                    </table>
                  </td></tr></tbody>
                </table>
              </div>
              <input type="hidden" name="charset" value="UTF-8">
              <input type="hidden" name="default_list_id" value="1">
              <input type="hidden" name="overwrite" value="2">
              <input type="hidden" name="is_v5" value="1">
            </form>
          `
                }}
            />
        </div>
    );
};

export default UnisenderForm;