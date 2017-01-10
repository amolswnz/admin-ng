<?php require_once 'header.php' ?>
<style type="text/css"> body { background-color: #e2e1e0; } .panel { box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24); margin-top: 20%; } </style>
<body>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-4 col-md-offset-4">
        <div class="panel panel-default">
            <div class="panel-heading"><h3 class="panel-title"><strong>Login</strong></h3></div>
            <div class="panel-body">
                <form role="form">
                    <div class="form-group">
                        <label for="emailId">Username or Email</label>
                        <input type="email" class="form-control" id="emailId" placeholder="Enter email">
                    </div>
                    <div class="form-group">
                        <label for="pwd">Password <a href="forgot.php">(Forgot Password)</a></label>
                        <input type="password" class="form-control" id="pwd" placeholder="Password">
                    </div>
                    <button type="submit" class="btn btn-success">Login</button>
                </form>
                <hr>
                <p class='text-center'>&copy; 2016 <a href="https://amolwankhede.com" target="_blank">Amol Wankhede</a></p>
            </div>
        </div>
        </div>
    </div>
</div>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>

</body>
</html>